import {ClientRoutes} from 'code/client/ui/routes'
import createApolloClient from '../apollo/createApolloClient'
import {createStore} from '../redux'
import {browserHistory} from '../utils/browserHistory'
import browserStorage from '../utils/browserStorage'
import {domready} from '../utils/domready'
import {clientRender} from './clientRender'

domready(async () => {
  const getStoredLoginToken = async () => null

  const apolloClient = createApolloClient({
    getStoredLoginToken,
    initialState: window.__APOLLO_CLIENT_STATE__,
  })
  const store = createStore({
    apolloClient,
    browserStorage,
    getStoredLoginToken,
    history: browserHistory,
  })

  await clientRender({
    apolloClient,
    appHistory: browserHistory,
    ClientRoutes,
    store,
  })
  if (__HMR__ && module.hot) {
    module.hot.accept('code/client/ui/routes', async () => {
      await clientRender({
        apolloClient,
        appHistory: browserHistory,
        ClientRoutes,
        store,
      })
    })
  }
})
