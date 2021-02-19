
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {loginSuccess} from '../ducks'

const withAuthentication = (Component) => () => {
  const currentSession = JSON.parse(localStorage.getItem('auth'));
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentSession != null) {
      dispatch(loginSuccess(currentSession));
    }
  }, [dispatch, currentSession]);

  return currentSession != null ? <Component /> : <Redirect to="/error/401" />;
};

export default withAuthentication;
