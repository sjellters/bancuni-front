import { takeLatest, put, call } from 'redux-saga/effects';

import * as ducks from 'ducks';
import * as tools from 'tools';

function* user(action) {
    
    console.log(action);

  try {
    const { params } = action.payload;

    console.log(params);
    const {
      message: { result },
    } = yield call(tools.Get, `/users/${params}`, {
      id: params.id,
    });
    yield put(ducks.userSuccess(result));
    localStorage.setItem('user', JSON.stringify(result));
  } catch (error) {
    console.log(error);
    const {
      message: { result },
    } = error.response.data;
    yield put(ducks.userError(result));
  }
}

export function* userSaga() {
  yield takeLatest(ducks.USER_REQUEST, user);
}
