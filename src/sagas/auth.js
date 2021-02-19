import { takeLatest, put, call } from 'redux-saga/effects';

import * as ducks from 'ducks';
import * as tools from 'tools';

function* login(action) {
  try {
    const { params, history } = action.payload;
    const {
      message: { result },
    } = yield call(tools.Post, '/login', {
      email: params.email,
      password: params.password,
    });
    yield put(ducks.loginSuccess(result));
    yield put(ducks.showAlertSnackbar(tools.LOGIN_SUCCESSFULLY));
    localStorage.setItem('auth', JSON.stringify(result));
    history.push('/dashboard');
  } catch (error) {
    const {
      message: { result },
    } = error.response.data;
    yield put(ducks.loginError(result));
    alert(result);
  }
}

function* register(action) {
  try {
    const { params } = action.payload;
    const {
      message: { result },
    } = yield call(tools.Post, '/users/sign-up', {
      email: params.email,
      lastNames: params.lastNames,
      names: params.names,
      password: params.password,
    });
    yield put(ducks.registerSuccess(result));
    yield put(ducks.showAlertSnackbar(tools.REGISTER_SUCCESSFULLY));
    localStorage.setItem('auth', JSON.stringify(result));
  } catch (error) {
    const {
      message: { result },
    } = error.response.data;
    yield put(ducks.registerError(result));
    alert(result);
  }
}

function logout(action) {
  const { history } = action.payload;

  localStorage.removeItem('auth');
  history.push('/');
}

export function* logoutSaga() {
  yield takeLatest(ducks.LOGOUT, logout);
}

export function* loginSaga() {
  yield takeLatest(ducks.LOGIN_REQUEST, login);
}

export function* registerSaga() {
  yield takeLatest(ducks.REGISTER_REQUEST, register);
}
