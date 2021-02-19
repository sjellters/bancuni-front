import React , {useState, useEffect} from 'react';
import AttachMoneyRoundedIcon from '@material-ui/icons/AttachMoneyRounded';
import { makeStyles, Paper, Typography} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  Muipaper: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    height: 'auto',
    padding: '1rem'
  },
  Data: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Tittle: {
    width: '300px',
  },
  table: {
    minWidth: 650,
  },
  MuiTable: {
    width: '97%',
  }
}));

const Dashboard = ({ route }) => {
  const classes = useStyles();

  const [userName, setUserName] = useState("Ryuza");
  const [userLastName, setUserLastName] = useState("Limachi");
  const [money, setMoney] = useState(100.80);
  const [userId, setuserId] = useState("1231354654");

  return (
    <React.Fragment>
      <main className={classes.root}>
        
        {/* {renderRoutes(route.routes)} */}
        <Typography variant={'h4'} classes={{h4: classes.Tittle}}>
            Current Account
        </Typography>

        <Typography  variant={'h5'}>
          <span>
          <AttachMoneyRoundedIcon style={{ fontSize: 20 }} />{money}
          </span>
        </Typography>

        <Paper classes={{elevation3: classes.Muipaper}} elevation={3}>
          <div className={classes.Data}>
            <Typography>
              UserID:
            </Typography>
            <Typography>
              {userId}
            </Typography>
          </div>
          <div className={classes.Data}>
            <Typography>
              Name: 
            </Typography>
            <Typography>
              {userName}
            </Typography >
          </div>
          <div className={classes.Data}>
            <Typography>
              Last Name: 
            </Typography>
            <Typography>
              {userLastName}
            </Typography>
          </div>          
        </Paper>

      </main>
     </React.Fragment>
  );
};

export default Dashboard;
