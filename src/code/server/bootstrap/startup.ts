import {runHttpServer} from './runHttpServer'
import {startupSubject} from '../utils/startupSubject'

export const startup = async () => {
  await runHttpServer()

  startupSubject.next(true)
}
