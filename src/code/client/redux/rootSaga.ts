import {all} from 'redux-saga/effects'

export function* rootSaga(options) {
  const allSagas: Array<() => void> = []
  yield all(allSagas.map(saga => saga()))
}
