export const TRANSFER_REQUEST = 'bancuni/auth/ID_REQUEST';
export const TRANSFER_SUCCESS = 'bancuni/auth/ID_SUCCESS';
export const TRANSFER_ERROR = 'bancuni/auth/ID_ERROR';


const initialState = {
  loading: false,
  data: null,
  error: '',
};

export default function reducer(state = initialState, action) {
  //console.log(action.payload.data);
  switch (action.type) {
    case TRANSFER_REQUEST:
      return {
        ...state,
        data: null,
      };
    case TRANSFER_SUCCESS:
      console.log(action.payload.data)
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case TRANSFER_ERROR:
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

export const verifyTransferRequest = (params,token) => ({
  type: TRANSFER_REQUEST,
  payload: { params , token },
});

export const verifyTransferSuccess = (data) => ({
  type: TRANSFER_SUCCESS,
  payload: { data },
});

export const verifyTransferError = (message) => ({
  type: TRANSFER_ERROR,
  payload: { message },
});
