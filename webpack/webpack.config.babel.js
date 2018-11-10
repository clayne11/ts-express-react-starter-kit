/* eslint-disable no-console */

import AssetsPlugin from 'assets-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import path from 'path'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'
import webpack from 'webpack'
import getBabelLoader from './getBabelLoader'
import getOptions from './getOptions'
import {ReactLoadablePlugin} from './reactLoadableWebpack'
import {root} from './utils'
import smartMerge from './utils/smartMerge'
import smartMergeArray from './utils/smartMergeArray'
import nodeExternals from './webpackExternalNodes'
import HappyPack from 'happypack'

const buildStaticPaths = {
  server: path.join(process.cwd(), 'lib', 'server'),
  client: path.join(process.cwd(), 'lib', 'client'),
}

const getOutput = ({__PROD__, __SERVER__}) => {
  const assetsPath = __SERVER__
    ? buildStaticPaths.server
    : buildStaticPaths.client

  if (__PROD__) {
    return {
      // The output directory as absolute path (required). http://webpack.github.io/docs/configuration.html#output-path
      path: assetsPath,
      // The filename of the entry chunk as relative path inside the output.path directory.
      // http://webpack.github.io/docs/configuration.html#output-filename
      filename: __SERVER__ ? 'index.js' : '[name]-[chunkhash].js',
      // The filename of non-entry chunks as relative path inside the output.path directory.
      // http://webpack.github.io/docs/configuration.html#output-chunkfilename
      chunkFilename: __SERVER__ ? '[name].js' : '[chunkhash].js',
      // The output.path from the view of the Javascript / HTML page.
      // http://webpack.github.io/docs/configuration.html#output-publicpath
      publicPath: '/static/',
    }
  }

  return {
    // The output directory as absolute path (required). http://webpack.github.io/docs/configuration.html#output-path
    path: assetsPath,
    // The filename of the entry chunk as relative path inside the output.path directory.
    // http://webpack.github.io/docs/configuration.html#output-filename
    filename: __SERVER__ ? 'index.js' : '[name].js',
    // The filename of non-entry chunks as relative path inside the output.path directory.
    // http://webpack.github.io/docs/configuration.html#output-chunkfilename
    chunkFilename: '[name].js',
    // The output.path from the view of the Javascript / HTML page.
    // http://webpack.github.io/docs/configuration.html#output-publicpath
    publicPath: '/static/',
  }
}

const getRules = options => {
  const {__SERVER__} = options
  return [
    {
      test: /\.(png|jpe?g)(\?.*)?$/,
      loader: 'url-loader',
      options: smartMerge({limit: 8192}, __SERVER__ && {emitFile: false}),
      include: [root('./src')],
    },
    {
      test: /\.(svg|ttf|woff2?|eot|pdf|zip|ico)(\?.*)?$/,
      loader: 'file-loader',
      options: smartMerge(__SERVER__ && {emitFile: false}),
      include: [root('./src')],
    },
    {
      test: /\.(graphql|gql)$/,
      loader: 'graphql-tag/loader',
      include: [root('./src')],
    },
    {
      test: /\.(html|yml)$/,
      loader: 'raw-loader',
      include: [root('./src')],
    },
    {
      test: /\.tsx?$/,
      include: root('./src'),
      exclude: /node_modules/,
      // loaders defined in plugin section
      use: 'happypack/loader',
    },
    {
      test: /\.jsx?$/,
      include: root('./src'),
      exclude: /node_modules/,
      use: [getBabelLoader(options)],
    },
    // Some webpack files have let and const in them which is not supported by
    // some older browsers. We don't want to transpile node_modules so
    // this hack solves the issue by replacing "let" and "const" within webpack
    // files with "var"
    {
      test: /\.jsx?$/,
      include: /node_modules\/.*webpack.*/,
      loader: [
        {
          loader: 'string-replace-loader',
          options: {
            search: '(const|let) ',
            replace: 'var ',
            flags: 'g',
          },
        },
      ],
    },
  ]
}

const getPlugins = options => {
  const {
    __ANALYZE__,
    __DEV__,
    __HMR__,
    __PROD__,
    __SERVER__,
    showProgress,
  } = options

  const plugins = smartMergeArray(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __DEV__: __DEV__,
      __HMR__: __HMR__,
      __PROD__: __PROD__,
      __SERVER__: __SERVER__,
      'global.GENTLY': false,
    }),
    __SERVER__
      ? new CopyWebpackPlugin([
          {from: root('src/code/server/assets'), to: 'assets'},
        ])
      : new CopyWebpackPlugin([
          {from: root('src/code/client/assets'), to: 'assets'},
        ]),
    __SERVER__ &&
      new webpack.BannerPlugin({
        banner: 'require("source-map-support").install();',
        raw: true,
        entryOnly: false,
      }),
    new HappyPack({
      loaders: [
        {loader: 'cache-loader'},
        getBabelLoader(options),
        {
          loader: 'ts-loader',
          options: {
            happyPackMode: true,
          },
        },
      ],
    })
  )

  // write assets in production but only for the browser
  if (!__SERVER__) {
    plugins.push(
      new AssetsPlugin({
        path: buildStaticPaths.server,
        filename: 'webpack-stats.json',
      })
    )
    plugins.push(
      new ReactLoadablePlugin({
        filename: path.join(buildStaticPaths.server, 'react-loadable.json'),
      })
    )
  }

  // add progress bar to the build
  if (showProgress) {
    plugins.push(
      new ProgressBarPlugin({
        format: '  build [:bar] :percent (:elapsed seconds)',
        clear: false,
        width: 60,
      })
    )
  }

  return plugins
}

export default function(input = {}) {
  const options = getOptions(input)
  const {
    host: WEBPACK_HOST,
    port: WEBPACK_PORT,
    __PROD__,
    __SERVER__,
    __HMR__,
  } = options

  const config = {
    context: root(''),
    output: getOutput(options),
    entry: {
      main: smartMergeArray(
        'core-js/modules/es7.symbol.observable',
        'isomorphic-fetch',
        __SERVER__ && 'core-js/modules/es7.symbol.async-iterator',
        __SERVER__
          ? root('src', 'code', 'server', 'index.ts')
          : root('src', 'code', 'client', 'index.ts')
      ),
    },
    mode: __PROD__ ? 'production' : 'development',
    module: {
      rules: getRules(options),
    },
    plugins: getPlugins(options),
    optimization: {
      minimizer: [
        new UglifyJSPlugin({
          parallel: true,
          sourceMap: true,
          uglifyOptions: {
            ie8: false,
            ecma: 8,
          },
        }),
      ],
      splitChunks: {
        chunks: 'all',
      },
    },
    resolve: {
      modules: [root('./src'), 'node_modules'],
      extensions: [
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
        '.css',
        '.scss',
        '.json',
        '.svg',
        '.png',
        '.jpg',
        '.jpeg',
        '.zip',
        '.pdf',
        '.tff',
        '.woff',
        '.woff2',
        '.eot',
        '.html',
        '.yml',
      ],
    },
    node: {
      child_process: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
    },
    devtool: __PROD__ ? '#source-map' : '#inline-cheap-module-source-map',
  }

  // use CommonJS bundle on the server so we can import it in
  // node for server-side rendering
  if (__SERVER__) {
    config.output.libraryTarget = 'commonjs2'
    config.externals = [nodeExternals({})]
    config.target = 'node'
  }

  // set up hot-reloading in dev browser
  if (__HMR__) {
    config.entry.main = [
      `webpack-dev-server/client?http://${WEBPACK_HOST}:${WEBPACK_PORT}`,
      'webpack/hot/only-dev-server',
      // 'react-hot-loader/patch',
    ].concat(config.entry.main)
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  // turn off performance hints in development
  if (!__PROD__) {
    config.performance = {
      hints: false,
    }
  }

  return config
}
