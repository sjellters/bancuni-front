import React , {useState, useEffect} from 'react';
import AttachMoneyRoundedIcon from '@material-ui/icons/AttachMoneyRounded';
import { makeStyles, Paper, Typography} from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';

import { accountRequest } from '../../../ducks/account'
import { userRequest } from '../../../ducks/user'

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

const CurrentAccount = ({ route }) => {

  const classes = useStyles();

  const [dataUser, setDataUser] = useState([]);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const accountInfo = useSelector((state) => state.account);
  const accountAllInfo = useSelector(state => state.user);

  useEffect(() => {
    
    dispatch(accountRequest());
    setData(accountInfo.data);
    console.log(data);

    const id = "656565";
    dispatch(userRequest(id));
    setData(accountAllInfo.data);
    console.log(data);

  }, []);

  return (
    <React.Fragment>
      <main className={classes.root}>
        
        <Typography variant={'h4'} classes={{h4: classes.Tittle}}>
            Current Account
        </Typography>

        
        <Typography  variant={'h5'}>
          <span>
          <AttachMoneyRoundedIcon style={{ fontSize: 20 }} />{dataUser.money}
          </span>
        </Typography>

        <Paper classes={{elevation3: classes.Muipaper}} elevation={3}>
          <div className={classes.Data}>
            <Typography>
              UserID:
            </Typography>
            <Typography>
              {dataUser._id}
            </Typography>
          </div>
          <div className={classes.Data}>
            <Typography>
              Name: 
            </Typography>
            <Typography>
              {dataUser.names}
            </Typography >
          </div>
          <div className={classes.Data}>
            <Typography>
              Last Name: 
            </Typography>
            <Typography>
              {dataUser.lastnames}
            </Typography>
          </div>          
        </Paper>


      </main>
     </React.Fragment>
  );
};

export default CurrentAccount;
