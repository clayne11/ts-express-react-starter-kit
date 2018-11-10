import {ApolloServer} from 'apollo-server-express'
import {makeExecutableSchema} from 'graphql-tools'
import {modules} from './modules'
import {getTokenFromRequest} from './utils/getTokenFromRequest'
import {app, httpServer} from '../app'
import {teardown} from '../utils/startup'

const schema = makeExecutableSchema(modules)

interface User {}

export interface ApolloContext {
  scope: {}
  user?: User
  userId?: string
}

const createApolloServer = async () => {
  const setupContext = async ({token}): Promise<ApolloContext> => {
    const scope = {}

    const context: ApolloContext = {
      scope,
    }

    return context
  }

  const WEBSOCKET_PATH = '/subscriptions'
  const graphqlPath = '/graphql'
  const enableGraphiql = true

  const server = new ApolloServer({
    schema,
    context: async ({req, payload}) => {
      const token = payload
        ? payload.authToken
        : getTokenFromRequest({request: req})
      return await setupContext({token})
    },
    formatError: error => {
      return {
        message: error.message,
        locations: error.locations,
        path: error.path,
      }
    },
    engine: false,
    tracing: true,
    cacheControl: true,
    playground: enableGraphiql && {
      endpoint: graphqlPath,
      subscriptionEndpoint: WEBSOCKET_PATH,
    },
    mocks: false,
    subscriptions: {
      keepAlive: 30000,
      path: WEBSOCKET_PATH,
    },
  })
  server.applyMiddleware({
    app,
    path: graphqlPath,
  })

  await server.installSubscriptionHandlers(httpServer)

  teardown(async () => {
    server.stop()
  })
}

export {createApolloServer}
