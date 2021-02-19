import { all, fork } from 'redux-saga/effects';
import * as authSagas from './auth';

function* rootSaga() {
  yield all([
    fork(authSagas.loginSaga), 
    fork(authSagas.registerSaga)
  ]);
}

export default rootSaga;
