'use strict'
const fs = require('fs')
const mkdirp = require('mkdirp')
const path = require('path')
const url = require('url')

function buildManifest(compiler, compilation) {
  const context = compiler.options.context
  const manifest = {}

  compilation.chunks.forEach(chunk => {
    chunk.files
      .filter(file => !/((.*\.js\.map)|(.*\.hot-update\.js))$/.test(file))
      .forEach(file => {
        for (const module of chunk.modulesIterable) {
          const id = module.id
          const name =
            typeof module.libIdent === 'function'
              ? module.libIdent({context})
              : null
          const publicPath = url.resolve(
            compilation.outputOptions.publicPath || '',
            file
          )

          let currentModule = module
          if (module.constructor.name === 'ConcatenatedModule') {
            currentModule = module.rootModule
          }
          if (!manifest[currentModule.rawRequest]) {
            manifest[currentModule.rawRequest] = []
          }

          manifest[currentModule.rawRequest].push({id, name, file, publicPath})
        }
      })
  })

  return manifest
}

class ReactLoadablePlugin {
  constructor(opts = {}) {
    this.filename = opts.filename
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      'ReactLoadablePlugin',
      (compilation, callback) => {
        const manifest = buildManifest(compiler, compilation)
        const json = JSON.stringify(manifest, null, 2)
        const outputDirectory = path.dirname(this.filename)
        try {
          mkdirp.sync(outputDirectory)
        } catch (err) {
          if (err.code !== 'EEXIST') {
            throw err
          }
        }
        fs.writeFileSync(this.filename, json)
        callback()
      }
    )
  }
}

function getBundles(manifest, moduleIds) {
  return moduleIds.map(moduleId => {
    return manifest[moduleId]
  })
}

exports.ReactLoadablePlugin = ReactLoadablePlugin
exports.getBundles = getBundles
