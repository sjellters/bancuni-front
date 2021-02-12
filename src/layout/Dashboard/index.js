import React from 'react';
import { renderRoutes } from 'react-router-config';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    height: `100vh`,
  },
}));

const Dashboard = ({ route }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main className={classes.root}>{renderRoutes(route.routes)}</main>
    </React.Fragment>
  );
};

export default Dashboard;
