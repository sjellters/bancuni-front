import { combineReducers } from 'redux';

// my ducks
import authReducer from './auth';
import alertSnackbarReducer from './alertSnackbar';

const rootReducer = combineReducers({
  auth: authReducer,
  alertSnackbar: alertSnackbarReducer,
});

export default rootReducer;

export * from './auth';
export * from './alertSnackbar';