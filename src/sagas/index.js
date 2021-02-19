import { all, fork } from 'redux-saga/effects';
import * as authSagas from './auth';
import * as transferSagas from './transfer' ;

function* rootSaga() {
  yield all([
    fork(authSagas.loginSaga),
    fork(authSagas.registerSaga),
    fork(authSagas.logoutSaga),
    fork(transferSagas.transferValidationSaga)
  ]);
}

export default rootSaga;
