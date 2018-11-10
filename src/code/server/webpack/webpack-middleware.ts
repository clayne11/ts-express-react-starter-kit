import {app} from 'code/server/app'
import {serverRender} from '../ui/serverRender'
import getWebpackUrls from './getWebpackUrls'

function isAppUrl(req) {
  const url = req.url
  const nonClientRoutes = ['/app.manifest', '/favicon.ico', '/robots.txt']
  if (nonClientRoutes.includes(url)) {
    return false
  }

  return true
}

app.use(async (req, res, next) => {
  if (!isAppUrl(req)) {
    next()
    return
  }

  try {
    const {webpackUrls, reactLoadableStats} = await getWebpackUrls()

    await serverRender({
      res,
      webpackUrls,
    })
  } catch (error) {
    next(error)
  }
})
