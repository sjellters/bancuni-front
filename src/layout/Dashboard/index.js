import React from 'react';
import { renderRoutes } from 'react-router-config';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

const Dashboard = ({ route }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main className={classes.root}> 
      
      {renderRoutes(route.routes)} 

      </main>
     </React.Fragment>
  );
};

export default Dashboard;
