import { combineReducers } from 'redux';

// my ducks
import authReducer from './auth';


const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;

export * from './auth';
