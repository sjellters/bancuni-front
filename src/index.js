import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'store';

const store = configureStore();

ReactDOM.render(
  <StoreProvider store={store}>
    <Router>
      <App />
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);
