import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
  Hidden,
  makeStyles,
  Typography,
  Link,
  IconButton,
  Paper,
} from '@material-ui/core';

import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

import { CustomInput, CustomInputPassword, GeneralAuth } from 'components';

import { goToRegister, backToLogin } from 'ducks';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '10%',
    justifyContent: 'center',
    padding: theme.spacing(6),
    flexDirection: 'column',
  },
  inputUserPassword: {
    margin: '20px 0',
  },
  buttonsSection: {
    marginTop: theme.spacing(5),
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  loginButton: {
    fontWeight: 'bold',
    marginLeft: '1em',
    width: '15em',
  },
  returnButton: {
    float: 'right',
    marginTop: theme.spacing(5),
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  gridContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '4%',
  },

  gridItem: {
    flex: '0 33%',
    height: '70px',
    marginBottom: '2%',
  },

  generalContainer: {
    marginTop: '3%',
  },

  sesion: {
    marginTop: theme.spacing(3),
  },
}));

const Login = () => {
  const classes = useStyles();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [dataUser, setDataUser] = useState({
    
  });
  const showRegister = useSelector((state) => state.auth.showRegister);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogin = () => {};
  const handleRegister = () => {};

  return (
    <div>
      <Paper className={classes.root}>
        {!showRegister ? (
          <GeneralAuth
            mainTitle="Bancuni"
            secondaryTitles={['']}
            subtitles={['Ingrese sus credenciales']}
          >
            <div className={classes.inputUserPassword}>
              <CustomInput
                beforeicon={
                  <IconButton disabled aria-label="user-icon">
                    <PersonRoundedIcon />
                  </IconButton>
                }
                autoFocus
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    email: e.target.value,
                  })
                }
                value={credentials.email}
                type="email"
                placeholder="Ingrese su correo electrónico"
                inputProps={{ 'aria-label': 'user-input' }}
              />
              <CustomInputPassword
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    password: e.target.value,
                  })
                }
                submitinput={handleLogin}
                value={credentials.password}
                placeholder="Ingrese su contraseña"
                inputProps={{ 'aria-label': 'password-input' }}
              />
            </div>
            <Hidden xsDown>
              <div className={classes.buttonsSection}>
                <Button
                  size="large"
                  endIcon={<ArrowForwardIosRoundedIcon />}
                  variant="contained"
                  color="primary"
                  className={classes.loginButton}
                  onClick={handleLogin}
                >
                  Ingresar
                </Button>
              </div>
            </Hidden>
            <Hidden smUp>
              <div className={classes.buttonsSection}>
                <Button
                  fullWidth
                  size="large"
                  endIcon={<ArrowForwardIosRoundedIcon />}
                  variant="contained"
                  color="primary"
                  className={classes.loginButtonXs}
                  onClick={handleLogin}
                >
                  Ingresar
                </Button>
              </div>
            </Hidden>
            <div className={classes.sesion}>
              <Typography component="h5">
                ¿No tienes una cuenta?{' '}
                <Link
                  href="#"
                  variant="h6"
                  onClick={() => {
                    dispatch(goToRegister());
                  }}
                >
                  Registrate
                </Link>
              </Typography>
            </div>
          </GeneralAuth>
        ) : (
          <div className={classes.generalContainer}>
            <Button
              size="large"
              startIcon={<ArrowBackIosRoundedIcon />}
              variant="contained"
              color="primary"
              className={classes.returnButton}
              onClick={() => {
                dispatch(backToLogin());
              }}
            >
              Volver
            </Button>
            <GeneralAuth
              mainTitle="Registrate"
              secondaryTitles={['']}
              subtitles={[
                'Ingrese sus datos',
              ]}
            >
              {/* <div className={classes.gridContainer}>
              {credentials.map((value, index) => {
                return (
                  <div className={classes.gridItem} key={index}>
                    <CustomInputPassword
                      onChange={(e) => setPasswordValue(e.target.value, index)}
                      value={credentials[index]}
                      placeholder={'Ingrese key ' + (index + 1)}
                      inputProps={{ 'aria-label': 'password-member-input' }}
                    />
                  </div>
                );
              })}
            </div> */}
              <div className={classes.buttonsSection}>
                <Button
                  size="large"
                  endIcon={<ArrowForwardIosRoundedIcon />}
                  variant="contained"
                  color="primary"
                  className={classes.loginButton}
                  onClick={handleRegister}
                >
                  Registrar
                </Button>
              </div>
            </GeneralAuth>
          </div>
        )}
      </Paper>
    </div>
  );
};

export default Login;
