import {createApolloServer} from '../apollo/createApolloServer'
import {startupSubject} from '../utils/startupSubject'
import {runHttpServer} from './runHttpServer'

export const startup = async () => {
  await createApolloServer()
  await runHttpServer()

  require('code/server/webpack')

  startupSubject.next(true)
}
