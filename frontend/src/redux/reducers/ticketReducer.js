import { createSlice } from '@reduxjs/toolkit';
import { fetchAllTicket, fetchPostTicket } from '../../api';
import { initialData } from '../../utils';
import error from '../../constants/error';

export const ticketReducer = createSlice({
  name: 'tickets',
  initialState: {
    isLoadingTickets: false,
    ticketsData: initialData,
    getPostErrResponse: null,
    isLoadingPost: false,
    newPostResponse: null,
    newPostErrMessage: null
  },
  reducers: {
    setIsLoadingTicket: (state, action) => {
      state.isLoadingTickets = action.payload;
    },
    setInitalData: (state, action) => {
      state.ticketsData = action.payload;
    },
    setTicketsData: (state, action) => {
      state.ticketsData.tickets = action.payload;
    },
    setTicketsColumn: (state, action) => {
      for (let value of action.payload) {
        state.ticketsData.columns[value.status].ticketIds.push(value.ticket_id)
      }
    },
    setGetPostErrResponse: (state, action) => {
      state.getPostErrResponse = action.payload;
    },
    setIsLoadingPost: (state, action) => {
      state.isLoadingPost = action.payload;
    },
    setNewPostResponse: (state, action) => {
      state.newPostResponse = action.payload;
    },
    setNewPostErrMessage: (state, action) => {
      state.newPostErrMessage = action.payload;
    }
  }
});

export const {
  setIsLoadingTicket,
  setInitalData,
  setTicketsData,
  setTicketsColumn,
  setGetPostErrResponse,
  setIsLoadingPost,
  setNewPostResponse,
  setNewPostErrMessage
} = ticketReducer.actions;

export const getTicket = () => dispatch => {
  dispatch(setIsLoadingTicket(true));
  fetchAllTicket()
    .then(response => {
      dispatch(setTicketsData(response.tickets));
      dispatch(setTicketsColumn(response.tickets));
      dispatch(setIsLoadingTicket(false));
    })
    .catch(error => {
      dispatch(setGetPostErrResponse(error.FAIL_LOGIN[0]));
    })
};

export const postTicket = (data) => dispatch => {
  dispatch(setIsLoadingPost(true));
  fetchPostTicket(data)
    .then(response => {
      if (response.errno) {
        switch (response.errno) {
          case 'ERR_INVALID_PARAMS':
            dispatch(setNewPostErrMessage(error.FAIL_POST[400]));
            break;
          default:
            dispatch(setNewPostErrMessage(error.FAIL_POST[0]));
            break;
        }
      }
      dispatch(setNewPostResponse(response));
      dispatch(setIsLoadingPost(false));
    })
    .catch(error => console.log('error', error))

};

export default ticketReducer.reducer;
