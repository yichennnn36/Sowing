import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import ticketReducer from './reducers/ticketReducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    ticket: ticketReducer
  }
});