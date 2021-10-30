import { createSlice } from '@reduxjs/toolkit';
import { fetchRegister, fetchLogin } from '../../api';
import { getAuthToken, TOKEN_NAME, USER_NAME, EXPIRE_STAMP } from '../../utils';
import error from '../../constants/error';
import success from '../../constants/success';

export const userReducer = createSlice({
  name: 'users',
  initialState: {
    isLoadingRegister: false,
    registerResponse: null,
    isLoadingLogin: false,
    loginResponse: null,
    successMessage: null,
    errorMessage: null,
    userData: {
      user: '',
      token: '',
      expireStamp: ''
    }
  },
  reducers: {
    setIsLoadingRegister: (state, action) => {
      state.isLoadingRegister = action.payload;
    },
    setRegisterResponse: (state, action) => {
      state.registerResponse = action.payload;
    },
    setIsLoadingLogin: (state, action) => {
      state.isLoadingLogin = action.payload;
    },
    setLoginResponse: (state, action) => {
      state.loginResponse = action.payload;
    },
    setSuccessMessage: (state, action) => {
      state.successMessage = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    }
  }
});

export const {
  setIsLoadingRegister,
  setRegisterResponse,
  setIsLoadingLogin,
  setLoginResponse,
  setSuccessMessage,
  setErrorMessage,
  setUserData
} = userReducer.actions;

export const register = (username, password, nickname) => dispatch => {
  dispatch(setIsLoadingRegister(true));
  fetchRegister(username, password, nickname)
    .then(response => {
      if (response.errno) {
        switch (response.errno) {
          case 'ERR_USER_EXIST':
            dispatch(setErrorMessage(error.FAIL_REGISTER[409]));
            break;
          default:
            dispatch(setErrorMessage(error.FAIL_REGISTER[0]));
            break;
        }
      }
      dispatch(setRegisterResponse(response));
      dispatch(setSuccessMessage(success.SUCCESS_REGISTER));
      dispatch(setIsLoadingRegister(false));
    })
    .catch(error => console.log('error', error))
};

export const login = (username, password) => dispatch => {
  dispatch(setIsLoadingLogin(true));
  fetchLogin(username, password)
    .then(response => {
      if (response.errno) {
        switch (response.errno) {
          case 'ERR_USER_LOGIN_FAILED':
            dispatch(setErrorMessage(error.FAIL_LOGIN[400]));
            break;
          case 'ERR_USER_NOT_EXIST':
            dispatch(setErrorMessage(error.FAIL_LOGIN[401]));
            break;
          default:
            dispatch(setErrorMessage(error.FAIL_LOGIN[0]));
            break;
        }
      }
      dispatch(setLoginResponse(response));
      dispatch(setIsLoadingLogin(false));
    })
    .catch(error => console.log('error', error))
};

export const getMe = () => dispatch => {
  const data = {
    user: getAuthToken(USER_NAME),
    token: getAuthToken(TOKEN_NAME),
    expireStamp: getAuthToken(EXPIRE_STAMP)
  };
  dispatch(setUserData(data));
};

export default userReducer.reducer;
