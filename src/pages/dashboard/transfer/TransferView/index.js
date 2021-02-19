import React, { useState } from 'react';
import { renderRoutes } from 'react-router-config';
import { makeStyles, 
    Typography, 
    Paper, 
    Container, 
    Grid, 
    TextField, 
    Button, 
    Box } from '@material-ui/core';
import {useHistory} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { verifyTransferRequest } from 'ducks';

//import Alert from '@material-ui/lab/Alert';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    '& > *': {
        margin: theme.spacing(2),
    },
  },
  gridItem: {
    marginTop: theme.spacing(2),
  },
  container:{
      padding: theme.spacing(2),
  }
}));

const TransferView = ({ route }) => {
    const classes = useStyles();
    let history = useHistory();
    const dispatch = useDispatch();
    const [transfer,setTransfer ]= useState({
        available:"122000",
        sender : "Freider Achic",
        reciever : "",
        amount : "",
        message : ""
    });


    const handleChange = (e)=>{
        if(e.target.name==='amount'){
            setTransfer({...transfer, amount:e.target.value});
        }else if(e.target.name==='reciever'){
            setTransfer({...transfer, reciever:e.target.value});
        }else if(e.target.name==='message'){
            setTransfer({...transfer, message:e.target.value});
        }else{
            alert("Error");
        }
        console.log(transfer);
    }
    const handleContinue = (e)=>{
        alert("go to Confirm")
        dispatch(verifyTransferRequest(transfer))
        history.push('/dashboard/confirm')
    }
    const handleBack = (e)=>{
        alert("go Back")
    } 

  return (
    <Container className={classes.root}>
        <Paper>
            <Typography variant='h3' >Transfer Details</Typography>
        </Paper>
        <Paper className={classes.container} >
            <Grid container >
                <Grid item xs={6} className={classes.gridItem}> 
                    <Typography>Saldo Disponible</Typography>
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>    
                    <Typography>${transfer.available}</Typography>
                </Grid>
                <Grid item xs={6} className={classes.gridItem}> 
                    <Typography>De</Typography>
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>    
                    <Typography>{transfer.sender}</Typography>
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                    <Typography>Para</Typography>
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                    <TextField
                        //autoComplete="Nombre"
                        //autoFocus="true"
                        name="reciever"
                        variant="outlined"
                        required    
                        fullWidth
                        id="reciever"
                        label="ID usuario destino"
                        defaultValue={transfer.reciever}
                        autoFocus
                        onChange={handleChange}
                    />  
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                    <Typography>Monto</Typography>
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                    <TextField
                        //autoComplete="Nombre"
                        //autoFocus="true"
                        name="amount"
                        variant="outlined"
                        required    
                        fullWidth
                        id="amount"
                        label="Monto"
                        type="number"
                        InputProps={{ inputProps: { min: 5, max: 100000 } }}
                        defaultValue={transfer.amount}
                        autoFocus
                        onChange={handleChange}
                    />  
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                    <Typography>Message</Typography>
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                    <TextField
                        //autoComplete="Nombre"
                        //autoFocus="true"
                        name="message"
                        variant="outlined"
                        required    
                        fullWidth
                        id="message"
                        label="Mensaje"
                        defaultValue={transfer.message}
                        autoFocus
                        onChange={handleChange}
                    />  
                </Grid>
            </Grid>
        </Paper>
        <Paper>
        <Box display="flex" p={1} bgcolor="background.paper">
            <Box p={1} flexGrow={1} >
                <Button variant="contained" color="primary" onClick={handleBack}>
                    Cancel
                </Button>
            </Box>
            <Box p={1}>
                <Button variant="contained" color="primary" onClick={handleContinue}>
                    Continue
                </Button>
            </Box>
        </Box>
        </Paper>
    </Container>
  );
};


export default TransferView;
