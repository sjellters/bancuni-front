export const LOGIN_REQUEST = 'bancuni/auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'bancuni/auth/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'bancuni/auth/LOGIN_ERROR';

export const GO_TO_REGISTER = 'bancuni/auth/GO_TO_REGISTER';
export const BACK_TO_LOGIN = 'bancuni/auth/BACK_TO_LOGIN';

export const REGISTER_REQUEST = 'bancuni/auth/REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'bancuni/auth/REGISTER_SUCCESS';
export const REGISTER_ERROR = 'bancuni/auth/REGISTER_ERROR';

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
    case REGISTER_REQUEST:
      return {
        ...state,
        data: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
        data: null,
      };
    default:
      return state;
  }
}

export const loginRequest = (params, history) => ({
  type: LOGIN_REQUEST,
  payload: { params, history },
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

export const registerRequest = (params) => ({
  type: REGISTER_REQUEST,
  payload: { params },
});

export const registerSuccess = (data) => ({
  type: REGISTER_SUCCESS,
  payload: { data },
});

export const registerError = (message) => ({
  type: REGISTER_ERROR,
  payload: { message },
});
