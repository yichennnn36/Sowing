import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchRegister, fetchLogin } from '../../api';
import { getAuthToken, TOKEN_NAME, USER_NAME, EXPIRE_STAMP } from '../../utils';

export const registerAsync = createAsyncThunk(
  'user/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetchRegister(userData);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginAsync = createAsyncThunk(
  'user/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetchLogin(userData);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userReducer = createSlice({
  name: 'user',
  initialState: {
    response: null,
    status: 'idle',
    successMessage: null,
    errorMessage: null,
    userData: {
      user: '',
      token: '',
      expireStamp: ''
    }
  },
  reducers: {
    setResponse: (state, action) => {
      state.response = action.payload;
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.response = action.payload;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.status = 'error';
        state.errorMessage = action.payload;
      })
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.response = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'error';
        state.errorMessage = action.payload;
      });
  }
});

export const {
  setResponse,
  setSuccessMessage,
  setErrorMessage,
  setUserData
} = userReducer.actions;

export const selectUser = state => state.user;
export const selectUserData = state => state.user.userData;

export const getMe = () => dispatch => {
  const data = {
    user: getAuthToken(USER_NAME),
    token: getAuthToken(TOKEN_NAME),
    expireStamp: getAuthToken(EXPIRE_STAMP)
  };
  dispatch(setUserData(data));
};

export default userReducer.reducer;
