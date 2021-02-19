import { takeLatest, put, call } from 'redux-saga/effects';

import * as ducks from 'ducks';
import * as tools from 'tools';


function* confirmTransferValidation(action) {
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
      alert("Tienes 30 seg para confirmar la transferencia");
      yield put(ducks.verifyTransferSuccess(result));
      //localStorage.setItem('auth', JSON.stringify(result));
    } catch (error) {
      const {
        message: { result },
      } = error.response.data;
      yield put(ducks.verifyTransferError(result));
      alert(result)
    }
}

export function* confirmTransferValidationSaga() {
  yield takeLatest(ducks.CONFIRM_TRANSFER_REQUEST, confirmTransferValidation);
}
