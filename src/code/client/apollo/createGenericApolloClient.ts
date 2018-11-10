import ApolloClient from 'apollo-client'
import {DefaultOptions} from 'apollo-client/ApolloClient'
import {ApolloLink, split} from 'apollo-link'
import {createHttpLink} from 'apollo-link-http'
import {createPersistedQueryLink} from 'apollo-link-persisted-queries'
import {getOperationDefinitionOrDie} from 'apollo-utilities'
import {createApolloCache} from './createApolloCache'
import {createAuthLink} from './createAuthLink'
import {createWebSocketLink} from './createWebSocketLink'

interface CreateApolloClientParams {
  basicAuth?: {
    username: string
    password: string
  } | null
  buildLinkArray?: (
    params: {
      persistedQueryLink: ApolloLink
      authLink: ApolloLink
      dataLink: ApolloLink
    }
  ) => Array<ApolloLink>
  connectToDevTools: boolean
  defaultOptions?: DefaultOptions
  getLoginToken: () => Promise<string | null> | string | null
  graphqlSchema: any
  httpLink?: ApolloLink
  initialState?: {[x: string]: any}
  ssrMode?: boolean
  uri: string
  useSubscriptions: boolean
  ws?: WebSocket
}

const defaultBuildLinkArray = ({persistedQueryLink, authLink, dataLink}) => {
  return [persistedQueryLink, authLink, dataLink]
}

export const createGenericApolloClient = ({
  basicAuth,
  defaultOptions,
  httpLink,
  getLoginToken,
  graphqlSchema,
  initialState,
  uri,
  ws,
  buildLinkArray = defaultBuildLinkArray,
  connectToDevTools,
  ssrMode = false,
  useSubscriptions = true,
}: CreateApolloClientParams) => {
  const cache = createApolloCache({graphqlSchema})

  const dataLink = createDataLink({
    getLoginToken,
    httpLink,
    uri,
    useSubscriptions,
    ws,
  })

  const authLink = createAuthLink({
    basicAuth,
    getLoginToken,
  })

  const persistedQueryLink = createPersistedQueryLink()

  const link = ApolloLink.from(
    buildLinkArray({persistedQueryLink, authLink, dataLink})
  )

  const apolloClient = new ApolloClient({
    cache: initialState ? cache.restore(initialState) : cache,
    connectToDevTools,
    defaultOptions,
    link,
    queryDeduplication: true,
    ssrMode,
  })
  return apolloClient
}

const createDataLink = ({
  getLoginToken,
  uri,
  useSubscriptions,
  ws,
  httpLink = createHttpLink({uri}),
}: {
  getLoginToken: () => Promise<string | null> | string | null
  httpLink: ApolloLink | undefined
  uri: string
  useSubscriptions: boolean
  ws: WebSocket | undefined
}) => {
  if (useSubscriptions) {
    const wsLink = createWebSocketLink({
      getLoginToken: getLoginToken,
      uri,
      ws,
    })

    // using the ability to split links, you can send data to each link
    // depending on what kind of operation is being sent
    return split(
      // split based on operation type
      ({query}) => {
        const {kind, operation} = getOperationDefinitionOrDie(query)
        return kind === 'OperationDefinition' && operation === 'subscription'
      },
      wsLink,
      httpLink
    )
  }

  return httpLink
}
