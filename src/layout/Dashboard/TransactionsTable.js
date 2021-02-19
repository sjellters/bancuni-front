import React , {useState, useEffect} from 'react';
import { renderRoutes } from 'react-router-config';
import AttachMoneyRoundedIcon from '@material-ui/icons/AttachMoneyRounded';
import { makeStyles, Paper, Typography} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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


function formatDate(date) {
  const a = date.replace(/(\d+)-(\d+)-(\d+).+/g, '$3 / $2 / $1');
  //console.log(a);
  return(a)  
}

const TransactionTable = ({ route }) => {
  const classes = useStyles();

  const [data, setData] = useState([{
    _id: "12354654",
    createdAt: "2021-02-11T12:35:24.839+00:00",
    type: "Send",
    amount: "1000.00",
    message: "I sent this."
  }, ]);



  return (
    <React.Fragment>
      <main className={classes.root}>

        <Typography variant={'h4'} classes={{h4: classes.Tittle}}>
            Transaction History
        </Typography>

        <TableContainer className={classes.MuiTable} component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Message</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row._id}>
                  <TableCell>{formatDate(row.createdAt)}</TableCell>
                  <TableCell component="th" scope="row">
                    {row.message}
                  </TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell><AttachMoneyRoundedIcon style={{ fontSize: 10 }} />{row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </main>
     </React.Fragment>
  );
};

export default TransactionTable;
