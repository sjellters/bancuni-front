import { takeLatest, put, call } from 'redux-saga/effects';

import * as ducks from 'ducks';
import * as tools from 'tools';

function* login(action) {
  try {
    const { params } = action.payload;
    const {
      message: { result },
    } = yield call(tools.Post, '/login', {
      email: params.email,
      password: params.password,
    });
    yield put(ducks.loginSuccess(result));
    localStorage.setItem('auth', JSON.stringify(result));
  } catch (error) {
    const {
      message: { result },
    } = error.response.data;
    yield put(ducks.loginError(result));
  }
}

export function* loginSaga() {
  yield takeLatest(ducks.LOGIN_REQUEST, login);
}
