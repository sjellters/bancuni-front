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

function* transferValidation(action) {
    //let token =localStorage.getItem("auth")["access-token"];
    try {
      const { params,token } = action.payload;
      const {
        message: { result },
      } = yield call(tools.Post, '/transfers/verifyTransfer', {
        amount: params.amount,
        message: params.message,
        sender: params.sender,
        receiver: params.receiver,
      },{
        Authorization: `Bearer ${token}`,
      });
      yield put(ducks.verifyTransferSuccess(result));
      //localStorage.setItem('auth', JSON.stringify(result));
    } catch (error) {
      console.log("Error calling transfer: ",error)
      const {
        message: { result },
      } = error.response.data;
      yield put(ducks.verifyTransferError(result));
    }
}

export function* transferValidationSaga() {
  yield takeLatest(ducks.TRANSFER_REQUEST, transferValidation);
}
