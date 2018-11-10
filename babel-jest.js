/* eslint-disable */
/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

const crypto = require('crypto')
const fs = require('fs')
const path = require('path')
const jestPreset = require('babel-preset-jest')
const {transform: babelTransform, util: babelUtil} = require('@babel/core')
const babelIstanbulPlugin = require('babel-plugin-istanbul')

const BABELRC_FILENAME = '.babelrc'
const BABELRC_JS_FILENAME = '.babelrc.js'
const BABEL_CONFIG_KEY = 'babel'
const PACKAGE_JSON = 'package.json'
const THIS_FILE = fs.readFileSync(__filename)

const babelrc = fs.readFileSync(path.join(__dirname, '.babelrc'), 'utf8')

const createTransformer = options => {
  const cache = Object.create(null)

  options = Object.assign({}, options, {
    plugins: (options && options.plugins) || [],
    presets: ((options && options.presets) || []).concat([jestPreset]),
    sourceMaps: 'both',
  })
  delete options.cacheDirectory
  delete options.filename

  return {
    canInstrument: true,
    getCacheKey(fileData, filename, configString, {instrument, rootDir}) {
      return crypto
        .createHash('md5')
        .update(THIS_FILE)
        .update('\0', 'utf8')
        .update(fileData)
        .update('\0', 'utf8')
        .update(path.relative(rootDir, filename))
        .update('\0', 'utf8')
        .update(configString)
        .update('\0', 'utf8')
        .update(babelrc)
        .update('\0', 'utf8')
        .update(instrument ? 'instrument' : '')
        .digest('hex')
    },
    process(src, filename, config, transformOptions) {
      const altExts = config.moduleFileExtensions.map(
        extension => '.' + extension
      )
      if (babelUtil && !babelUtil.canCompile(filename, altExts)) {
        return src
      }

      const theseOptions = Object.assign({filename}, options)
      if (transformOptions && transformOptions.instrument) {
        theseOptions.auxiliaryCommentBefore = ' istanbul ignore next '
        // Copied from jest-runtime transform.js
        theseOptions.plugins = theseOptions.plugins.concat([
          [
            babelIstanbulPlugin,
            {
              // files outside `cwd` will not be instrumented
              cwd: config.rootDir,
              exclude: [],
            },
          ],
        ])
      }

      // babel v7 might return null in the case when the file has been ignored.
      const transformResult = babelTransform(src, theseOptions)

      if (!transformResult) {
        return src
      }

      const shouldReturnCodeOnly =
        transformOptions == null ||
        transformOptions.returnSourceString == null ||
        transformOptions.returnSourceString === true

      return shouldReturnCodeOnly ? transformResult.code : transformResult
    },
  }
}

const options = {
  babelrc: false,
  plugins: JSON.parse(babelrc).plugins,
  presets: JSON.parse(babelrc).presets,
}

module.exports = createTransformer(options)
