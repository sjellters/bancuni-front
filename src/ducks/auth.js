export const LOGIN_REQUEST = 'balcuni/auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'balcuni/auth/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'balcuni/auth/LOGIN_ERROR';

const initialState = {
  loading: false,
  data: null,
  error: '',
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
