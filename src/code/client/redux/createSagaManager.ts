import {take} from 'redux-saga/effects'
import {fork} from 'redux-saga/effects'
import {cancel} from 'redux-saga/effects'
import {SagaMiddleware} from 'redux-saga'

export const CANCEL_SAGAS_HMR = 'redux-saga/CANCEL_SAGAS_HMR'

let curKey = 0

const getSagaKey = (key: number) => `${CANCEL_SAGAS_HMR}${key}`

const createAbortableSaga = key => saga => {
  if (__HMR__) {
    return function* main() {
      const sagaTask = yield fork(saga)

      yield take(getSagaKey(key))
      yield cancel(sagaTask)
    }
  } else {
    return saga
  }
}

export const createSagaManager = <C>({
  sagaMiddleware,
}: {
  sagaMiddleware: SagaMiddleware<C>
}) => {
  const key = curKey++
  const startSagas = saga => {
    sagaMiddleware.run(createAbortableSaga(key)(saga))
  }

  const cancelSagas = store => {
    store.dispatch({
      type: getSagaKey(key),
    })
  }

  const restartSagas = ({saga, store}) => {
    cancelSagas(store)
    startSagas(saga)
  }

  return {
    startSagas,
    cancelSagas,
    restartSagas,
  }
}
