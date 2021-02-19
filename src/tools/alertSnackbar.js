const success = 'success';
const error = 'error';

// success

export const LOGIN_SUCCESSFULLY = {
  severity: success,
  message: 'Se inició sesión correctamente',
};

// helpers
export const createNewAlertSnackbarMessage = (severity, message) => ({
    severity,
    message,
  });