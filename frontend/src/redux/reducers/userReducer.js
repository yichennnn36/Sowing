import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchRegister, fetchLogin } from '../../api';

// export const registerAsync = createAsyncThunk(
//   'user/register',
//   async (username, password, nickname) => {
//     const result = await register(username, password, nickname);
//     return result;
//   }
// );

// export const loginAsync = createAsyncThunk(
//   'user/login',
//   async (username, password) => {
//     const result = await login(username, password);
//     return result;
//   }
// );

export const userReducer = createSlice({
  name: 'users',
  initialState: {
    isLoadingRegister: false,
    registerResponse: null,
    isLoadingLogin: false,
    loginResponse: null,
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
    }
  }
});

export const {
  setIsLoadingRegister,
  setRegisterResponse,
  setIsLoadingLogin,
  setLoginResponse
} = userReducer.actions;

export const register = (username, password, nickname) => dispatch => {
  dispatch(setIsLoadingRegister(true));
  fetchRegister(username, password, nickname)
    .then(res => {
      dispatch(setRegisterResponse(res));
      dispatch(setIsLoadingRegister(false));
    })
    .catch(err => console.log('err', err))
};

export const login = (username, password) => dispatch => {
  dispatch(setIsLoadingLogin(true));
  fetchLogin(username, password)
    .then(res => {
      dispatch(setLoginResponse(res));
      dispatch(setIsLoadingLogin(false));
    })
    .catch(err => console.log('err', err))
};

export default userReducer.reducer;
