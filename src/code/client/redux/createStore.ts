import {ApolloClient} from 'apollo-client'
import {routerMiddleware} from 'react-router-redux'
import {applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {BrowserStorage} from '../utils/browserStorage'
import createRootReducer from './createRootReducer'
import {
  createInjectSagasStore,
  injectSaga,
  restartSaga,
  sagaMiddleware,
  setOptions,
} from './reduxSagaInjector'
import {rootSaga} from './rootSaga'

const ROOT_SAGA_KEY = 'rootSaga'

export interface CreateStoreParams {
  apolloClient: ApolloClient<any>
  browserStorage: BrowserStorage
  getStoredLoginToken: () => string | null | Promise<string | null>
  history: any
  initialState?: any
}

export default ({
  apolloClient,
  browserStorage,
  getStoredLoginToken,
  history,
  initialState = {},
}: CreateStoreParams) => {
  const middleware = [thunk, sagaMiddleware]
  if (history) {
    middleware.push(routerMiddleware(history))
  }

  const enhancers = [applyMiddleware(...middleware)]
  if (
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    typeof (window as any).devToolsExtension !== 'undefined'
  ) {
    const {persistState} = require('redux-devtools')
    enhancers.push((window as any).devToolsExtension())
    enhancers.push(
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )
  }

  const enhancer = compose(...enhancers)
  const sagaOptions = {
    apolloClient,
    browserStorage,
    getStoredLoginToken,
    history,
  }
  setOptions(sagaOptions)

  const store = createInjectSagasStore(
    createRootReducer(),
    initialState,
    enhancer
  )
  injectSaga(ROOT_SAGA_KEY, rootSaga)

  if (__HMR__ && module.hot) {
    module.hot.accept('./createRootReducer', () => {
      store.replaceReducer(createRootReducer())
    })

    module.hot.accept('./rootSaga', () => {
      restartSaga(ROOT_SAGA_KEY, rootSaga)
    })
  }

  return store
}
