import {getPort} from 'code/server/utils/getPort'
import {httpServer} from '../app'
import {teardown} from '../utils/startup'

/* globals PORT */

const runHttpServer = () =>
  new Promise((resolve, reject) => {
    const port = getPort()

    if (!port) {
      throw new Error(
        `Environment Variable PORT must be set to startup a server`
      )
    }

    const callback = (err?: any) => {
      if (err) {
        // tslint:disable-next-line no-console
        console.log(`error starting up http server: ${err}`)
        reject(err)
      } else {
        // tslint:disable-next-line no-console
        console.log(`HTTP Server listening on port ${port}`)
        resolve()
      }
    }

    httpServer.listen(port, callback)

    teardown(async () => {
      await httpServer.close()
    })
  })

export {runHttpServer}
