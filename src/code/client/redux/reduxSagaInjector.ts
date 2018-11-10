import {createReduxSagaInjector} from './createReduxSagaInjector'

const {
  createInjectSagasStore,
  getStore,
  injectSaga,
  restartSaga,
  sagaMiddleware,
  setOptions,
} = createReduxSagaInjector()

export {
  createInjectSagasStore,
  getStore,
  injectSaga,
  restartSaga,
  sagaMiddleware,
  setOptions,
}
