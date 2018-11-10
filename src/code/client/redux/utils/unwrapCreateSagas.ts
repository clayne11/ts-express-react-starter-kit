import {all} from 'redux-saga/effects'

export const unwrapCreateSagas = createSagas =>
  function* rootSaga(options) {
    const allSagas = createSagas(options)
    const sagaFuncs = allSagas.map(saga => saga())
    yield all(sagaFuncs)
  }
