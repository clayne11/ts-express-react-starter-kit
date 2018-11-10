import createSagaMiddleware from 'redux-saga'
import {Store} from 'redux'
import {take} from 'redux-saga/effects'
import {fork} from 'redux-saga/effects'
import {cancel} from 'redux-saga/effects'
import {createInjectStore} from './reduxInjector'

export const CANCEL_SAGAS_HMR = 'redux-saga/CANCEL_SAGAS_HMR'

const getSagaKey = (key: number) => `${CANCEL_SAGAS_HMR}${key}`

const createAbortableSaga = key => saga => {
  if (__HMR__) {
    return function* main(options) {
      const sagaTask = yield fork(saga, options)

      yield take(getSagaKey(key))
      yield cancel(sagaTask)
    }
  } else {
    return saga
  }
}

export const createReduxSagaInjector = () => {
  let store: Store<any> | null = null
  let options
  let injectedSagas: Array<string> = []

  const sagaMiddleware = createSagaMiddleware()

  const cancelSaga = key => {
    if (store) {
      store.dispatch({
        type: getSagaKey(key),
      })
    }
  }

  const injectSaga = (key, saga, force = __SERVER__) => {
    // if already set, do nothing
    if (injectedSagas.includes(key) || force) {
      return
    }

    injectedSagas = [...injectedSagas, key]
    if (store) {
      sagaMiddleware.run(createAbortableSaga(key)(saga), options)
    }
  }

  const createInjectSagasStore = (initialReducers, ...args) => {
    store = createInjectStore(initialReducers, ...args)
    injectedSagas = []

    return store
  }

  const restartSaga = (key, saga) => {
    injectedSagas = injectedSagas.filter(curKey => curKey !== key)
    cancelSaga(key)
    injectSaga(key, saga)
  }

  const getStore = () => store

  const setOptions = curOptions => (options = curOptions)

  return {
    getStore,
    setOptions,
    sagaMiddleware,
    injectSaga,
    createInjectSagasStore,
    cancelSaga,
    restartSaga,
  }
}
