import { combineReducers } from 'redux';

// my ducks
import authReducer from './auth';
import accountReducer from './account';
import transactionReducer from './transaction';
import userReducer from './user';
import alertSnackbarReducer from './alertSnackbar';

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  transaction: transactionReducer,
  user: userReducer,
  alertSnackbar: alertSnackbarReducer,
});

export default rootReducer;

export * from './auth';
export * from './account';
export * from './transaction';
export * from './user';
export * from './alertSnackbar';
