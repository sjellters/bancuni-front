import { all, fork } from 'redux-saga/effects';
import * as authSagas from './auth';
import * as accountSagas from './account';
import * as userSagas from './user';
import * as transactionSagas from './transaction';

function* rootSaga() {
  yield all([
    fork(authSagas.loginSaga),
    fork(accountSagas.accountSaga),
    fork(userSagas.userSaga),
    fork(transactionSagas.transactionSaga),
  ]);
}

export default rootSaga;
