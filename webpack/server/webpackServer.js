/* eslint-disable no-console */
import {spawn} from 'child_process'
import express from 'express'
import proxy from 'http-proxy-middleware'
import logGetter from 'http-proxy-middleware/lib/logger'
import fetch from 'isomorphic-fetch'
import path from 'path'
import webpack from 'webpack'
import webpackConfig from '../webpack.config.babel'
import {killProcess} from '../utils/killProcess'

// turn off info logs since it happens every time a Websocket keep-alive packet is sent
logGetter.getInstance().setLevel('warn')

// Defines webpack host domain.
const WEBPACK_HOST = 'localhost'
// Defines webpack host port.
const WEBPACK_SERVER_PORT = process.env.WEBPACK_SERVER_PORT
const WEBPACK_CLIENT_PORT = process.env.WEBPACK_CLIENT_PORT
const SERVER_URL = `http://localhost:${process.env.PORT}`
const SERVER_WAIT_MS = 100
const MAX_TIMEOUT = 180 * 1000

let isServerUp = false
let isCompiling = false

const ensureServerUp = (req, res, next) => {
  const start = Date.now()
  const checkServerUp = async () => {
    if (isServerUp) {
      next()
      return
    }

    try {
      const response = await fetch(`${SERVER_URL}/ping`)
      if (response.ok && !isCompiling) {
        isServerUp = true
        next()
        return
      }
    } catch (error) {
      // do nothing, waiting for server to start
    }

    if (Date.now() - start > MAX_TIMEOUT) {
      next(new Error('Server timed out while starting up'))
      return
    }

    setTimeout(checkServerUp, SERVER_WAIT_MS)
  }

  checkServerUp()
}

// Proxy all static assets directly to our client webpack server
// anything that's not static will be routed to our server
const setupWebpackServer = () => {
  if (!process.env.PORT) {
    throw new Error(`Environment Variable PORT must be set to startup a server`)
  }
  const webpackProxyServerPort = process.env.WEBPACK_PROXY_SERVER_PORT
  if (!webpackProxyServerPort) {
    throw new Error(
      'WEBPACK_PROXY_SERVER_PORT must be supplied to start dev server'
    )
  }

  const app = express()
  app.use(
    '/static',
    proxy({
      target: `http://localhost:${WEBPACK_CLIENT_PORT}`,
      proxyTimeout: 60000,
    })
  )
  app.use('/ping', proxy({target: SERVER_URL, proxyTimeout: 60000}))
  app.use('/*', ensureServerUp)
  app.use('/*', proxy({target: SERVER_URL, proxyTimeout: 60000, ws: true}))

  app.listen(webpackProxyServerPort, err => {
    if (err) {
      throw new Error(`error starting up http server: ${err}`)
    } else {
      console.log(`HTTP Server listening on port ${webpackProxyServerPort}`)
    }
  })
}
setupWebpackServer()

// Obtains webpack development configuration object.
const config = webpackConfig({
  env: process.env.NODE_ENV,
  host: WEBPACK_HOST,
  port: WEBPACK_SERVER_PORT,
  dev: true,
  prod: false,
  server: true,
  extractCss: process.env.EXTRACT_CSS,
  showProgress: true,
})

let slave = null

const invalidateServer = () => {
  console.log('Server recompiling')
  isServerUp = false
  isCompiling = true
}
const compileFinished = () => {
  isCompiling = false
}

const compiler = webpack(config)
compiler.hooks.invalid.tap('DevServerRunner', invalidateServer)
compiler.hooks.done.tap('DevServerRunner', compileFinished)

compiler.watch(
  {
    aggregateTimeout: 300,
  },
  async (err, stats) => {
    isServerUp = false

    console.log(
      stats.toString({
        assets: false,
        colors: true,
      })
    )

    if (err) {
      console.log('Error', err)
      return
    }
    await killProcess(slave)

    const entryFileName = config.output.filename
    const directoryPath = config.output.path

    slave = spawn(
      `node`,
      ['--inspect=localhost:9250', path.join(directoryPath, entryFileName)],
      {
        stdio: ['pipe', 'pipe', 'pipe'],
      }
    )

    slave.stdout.on('data', data => {
      console.log(data.toString())
    })
    slave.stderr.on('data', data => {
      console.log(data.toString())
    })
  }
)
