import React from 'react';
import { Redirect } from 'react-router-dom';
import withAuthentication from 'hocs/withAuthentication';
import { DashboardLayout, ErrorLayout } from 'layout';
import { PublicPage } from 'pages';

import DashboardHome from 'pages/Dashboard/Account/index'

const routes = [
  {
    path: '/error',
    component: ErrorLayout,
    routes: [
      {
        path: '/error/401',
        exact: true,
        component: () => (
          <div>Usted no se encuentra autorizado para ingresar a esta ruta</div>
        ),
      },
      {
        path: '/error/404',
        exact: true,
        component: () => <div>Error 404: Not Found!</div>,
      },
      {
        component: () => <Redirect to="/error/404" />,
      },
    ],
  },
  {
    path: '/',
    exact: true,
    component: PublicPage,
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
        component: () => withAuthentication(() => <DashboardHome />) //
      },
      {
        path: '/dashboard/account',
        exact: true,
        component: () => <DashboardLayout route= {"/dashboard/account"} />
      },
    ],
  },
  {
    component: () => <Redirect to="/error/404" />,
  },
];

export default routes;
