import { combineReducers } from 'redux';
import authReducer from './auth';
import accountReducer from './account';
import transactionReducer from './transaction';
import userReducer from './user';

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  transaction: transactionReducer,
  user: userReducer,
});

export default rootReducer;

export * from './auth';
export * from './account';
export * from './transaction';
export * from './user';
