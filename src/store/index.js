import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'ducks';
import rootSaga from 'sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
