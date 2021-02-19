import React from 'react';
import Button from '@material-ui/core/Button';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DoubleArrowOutlinedIcon from '@material-ui/icons/DoubleArrowOutlined';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
      margin: theme.spacing(1, 'auto'),
    },
  }));

const user = "Stewart";

export default function FormDialog() {
    
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <Dialog open={open} onClose={handleClose}  aria-labelledby="form-dialog-title" >
        <div className={classes.icon}>
          <AccountCircleOutlinedIcon style={{ fontSize: 100 }}/>
          <DoubleArrowOutlinedIcon style={{ fontSize: 70 }}/>
          <AccountCircleOutlinedIcon style={{ fontSize: 100 }}/>
        </div>
        <DialogTitle id="customized-dialog-title" style={{ textAlign: 'center' }}>
          Pay {user}
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            autoFocus
            margin="dense"
            id="message"
            label="Message"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions className={classes.button}>
          <Button variant="outlined" color="primary">
            Proceed to pay
          </Button>
          <Button variant="outlined" color="primary" >
            Back
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}