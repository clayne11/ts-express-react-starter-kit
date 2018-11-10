/* eslint-disable no-console */

import WebpackDevServer from 'webpack-dev-server'
import webpack from 'webpack'

import webpackConfig from './webpack.config.babel'

// Defines webpack host domain.
const WEBPACK_HOST = 'localhost'
// Defines webpack host port.
const WEBPACK_CLIENT_PORT = process.env.WEBPACK_CLIENT_PORT

// Obtains webpack development configuration object.
const config = webpackConfig({
  env: process.env.NODE_ENV,
  host: WEBPACK_HOST,
  port: WEBPACK_CLIENT_PORT,
  dev: true,
  prod: false,
  server: false,
  ssr: process.env.SSR,
  showProgress: true,
})

// Webpack dev server configuration object.
const serverOptions = {
  stats: {colors: true},
  noInfo: true,
  // When changes are made the bundle will be recompiled.
  // This modified bundle is served from memory at the relative path specified in publicPath.
  publicPath: config.output.publicPath,
  // Base path for the content.
  proxy: {
    '*': `http://${WEBPACK_HOST}:${WEBPACK_CLIENT_PORT}`,
  },
  hot: true,
  historyApiFallback: true,
}

// Creates new webpack dev server object, with the above configuration.
const compiler = webpack(config)
const webpackDevServer = new WebpackDevServer(compiler, serverOptions)

// Starts the web server to listen on the specified port and host.
// Prints notification when bootstrap is done.
webpackDevServer.listen(WEBPACK_CLIENT_PORT, WEBPACK_HOST, () => {
  const url = `http://${WEBPACK_HOST}:${WEBPACK_CLIENT_PORT}`
  console.log(`Webpack development server listening on ${url}`)
})
