
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {loginSuccess} from '../ducks'

const withAuthentication = (Component) => () => {
  const currentSession = JSON.parse(localStorage.getItem('auth'));
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentSession != null) {
      // TODO Dispatch action to save token on localStorage
      console.log(currentSession);
      console.log('Session not found!');
      dispatch(loginSuccess(currentSession));
    }
  }, [dispatch, currentSession]);

  return currentSession != null ? <Component /> : <Redirect to="/error/401" />;
};

export default withAuthentication;
