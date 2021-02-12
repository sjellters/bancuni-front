import { all, fork } from 'redux-saga/effects';
import * as authSagas from './auth';

function* rootSaga() {
  yield all([fork(authSagas.loginSaga)]);
}

export default rootSaga;
