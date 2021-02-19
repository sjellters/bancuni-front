import React from 'react';
import { Redirect } from 'react-router-dom';
import withAuthentication from 'hocs/withAuthentication';
import { DashboardLayout, ErrorLayout, LoginLayout } from 'layout';

const routes = [
  {
    path: '/error',
    component: ErrorLayout,
    routes: [
      {
        path: '/error/401',
        exact: true,
        component: () => <div>Error 401</div>,
      },
      {
        path: '/error/404',
        exact: true,
        component: () => <div>Error 404</div>,
      },
      {
        component: () => <Redirect to="/error/404" />,
      },
    ],
  },
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/login" />,
  },
  {
    path: '/login',
    exact: true,
    component: LoginLayout,
  },
  {
    path: '/dashboard',
    component: DashboardLayout,
    routes: [
      {
        path: '/dashboard',
        exact: true,
        component: () => <Redirect to="/dashboard/account" />,
      },
      {
        path: '/dashboard/account',
        exact: true,
        component: withAuthentication(() => <div>Dashboard home</div>),
      },
    ],
  },
  {
    component: () => <Redirect to="/error/404" />,
  },
];

export default routes;
