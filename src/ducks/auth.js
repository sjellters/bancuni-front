export const LOGIN_REQUEST = 'bancuni/auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'bancuni/auth/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'bancuni/auth/LOGIN_ERROR';

export const GO_TO_REGISTER = 'bancuni/auth/GO_TO_REGISTER';
export const BACK_TO_LOGIN = 'bancuni/auth/BACK_TO_LOGIN';

const initialState = {
  loading: false,
  data: null,
  error: '',
  showRegister: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        data: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
        data: null,
      };
    case GO_TO_REGISTER:
      return {
        ...state,
        loading: true,
        error: '',
        showRegister: true,
      };
    case BACK_TO_LOGIN:
      return {
        ...state,
        loading: false,
        showRegister: false,
      };
    default:
      return state;
  }
}

export const loginRequest = (params) => ({
  type: LOGIN_REQUEST,
  payload: { params },
});

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: { data },
});

export const loginError = (message) => ({
  type: LOGIN_ERROR,
  payload: { message },
});

export const goToRegister = (data) => ({
  type: GO_TO_REGISTER,
  payload: { data },
});

export const backToLogin = (message) => ({
  type: BACK_TO_LOGIN,
  payload: { message },
});
