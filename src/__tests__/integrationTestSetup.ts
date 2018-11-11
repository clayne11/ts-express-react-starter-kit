import {createApolloServer} from 'code/server/apollo/createApolloServer'
import {runHttpServer} from 'code/server/bootstrap/runHttpServer'
import {setupExternalResources} from 'code/server/bootstrap/setupExternalResources'
import {runStartup, runTeardown} from 'code/server/utils/startup'

/* tslint:disable:no-console */
/* globals PORT */

jest.setTimeout(10000)

beforeAll(async () => {
  await setupExternalResources()
  await runStartup()
  await createApolloServer()
  await runHttpServer()
})

afterAll(async () => {
  try {
    await runTeardown()
  } catch (err) {
    console.log('err', err)
  }
})
