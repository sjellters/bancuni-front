import { combineReducers } from 'redux';

// my ducks
import authReducer from './auth';
import alertSnackbarReducer from './alertSnackbar';
import transferReducer from './transfer';

const rootReducer = combineReducers({
  auth: authReducer,
  alertSnackbar: alertSnackbarReducer,
  transfer: transferReducer
});

export default rootReducer;

export * from './auth';
export * from './alertSnackbar';
export * from './transfer';
