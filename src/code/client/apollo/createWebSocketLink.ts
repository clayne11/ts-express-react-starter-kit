import {WebSocketLink} from 'apollo-link-ws'
import url from 'url'

export const createWebSocketLink = ({
  getLoginToken,
  uri,
  ws,
}: {
  getLoginToken: () => Promise<string | null> | string | null
  uri: string
  ws?: any
}) => {
  const {host, protocol} = url.parse(uri)
  const WEBSOCKET_PATH = '/subscriptions'
  const wsProtocol = protocol === 'https:' ? 'wss:' : 'ws:'
  const websocketUrl = `${wsProtocol}//${host}${WEBSOCKET_PATH}`

  const wsLink = new WebSocketLink({
    uri: websocketUrl,
    options: {
      reconnect: true,
    },
    webSocketImpl: ws,
  })

  const subscriptionMiddleware = {
    applyMiddleware: async (options, next) => {
      options.authToken = await getLoginToken()
      next()
    },
  }

  // add the middleware to the web socket link via the Subscription Transport client
  wsLink.subscriptionClient.use([subscriptionMiddleware])

  return wsLink
}
