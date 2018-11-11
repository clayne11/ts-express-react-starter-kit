import {setupExternalResources} from 'code/server/bootstrap/setupExternalResources'
import {runStartup} from 'code/server/utils/startup'
import {createApolloServer} from '../apollo/createApolloServer'
import {startupSubject} from '../utils/startupSubject'
import {runHttpServer} from './runHttpServer'

export const startup = async () => {
  await setupExternalResources()
  await createApolloServer()
  await runHttpServer()
  await runStartup()

  require('code/server/webpack')

  startupSubject.next(true)
}
