import 'code/server/routes'
import {runTeardown} from '../utils/startup'
import {startup} from './startup'

process.on('SIGTERM', async () => {
  // tslint:disable-next-line no-console
  console.log('Received SIGTERM. Shutting down.')
  await runTeardown()
  process.exit(0)
})

startup()
