import fs from 'fs'
import path from 'path'
import {getRuntimeStaticPaths} from './runtimeStaticPaths'

let webpackUrls
let getWebpackUrls
let reactLoadableStats

const statsPath = path.join(
  getRuntimeStaticPaths().server,
  'webpack-stats.json'
)
const reactLoadablePath = path.join(
  getRuntimeStaticPaths().server,
  'react-loadable.json'
)

if (process.env.NODE_ENV !== 'production') {
  // XXX: Hardcoded way of getting to the root of the project
  getWebpackUrls = async () => {
    if (!webpackUrls) {
      try {
        webpackUrls = JSON.parse(fs.readFileSync(statsPath, 'utf8'))
      } catch (error) {
        // do nothing
      }
    }
    if (!reactLoadableStats) {
      try {
        reactLoadableStats = JSON.parse(
          fs.readFileSync(reactLoadablePath, 'utf8')
        )
      } catch (error) {
        // do nothing
      }
    }

    return {
      webpackUrls,
      reactLoadableStats,
    }
  }
} else {
  webpackUrls = JSON.parse(fs.readFileSync(statsPath, 'utf8'))
  reactLoadableStats = JSON.parse(fs.readFileSync(reactLoadablePath, 'utf8'))
  getWebpackUrls = async () => ({webpackUrls, reactLoadableStats})
}

export default getWebpackUrls
