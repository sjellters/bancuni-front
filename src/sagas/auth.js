import { takeLatest, put, call } from 'redux-saga/effects';

import * as ducks from 'ducks';
import * as tools from 'tools';

function* login(action) {
  try {
    const { params } = action.payload;
    const { message } = yield call(tools.Post, '/login', {
      email: params.email,
      password: params.password,
    });
    yield put(ducks.loginSuccess(message));
    yield put(ducks.showAlertSnackbar(tools.LOGIN_SUCCESSFULLY));
    localStorage.setItem('auth', JSON.stringify(message));
  } catch (error) {
    const { message } = error.response.data;
    yield put(ducks.loginError(message));
    yield put(
      ducks.showAlertSnackbar(
        tools.createNewAlertSnackbarMessage('error', message)
      )
    );
  }
}

export function* loginSaga() {
  yield takeLatest(ducks.LOGIN_REQUEST, login);
}
