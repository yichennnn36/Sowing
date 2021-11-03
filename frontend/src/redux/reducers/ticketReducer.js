import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllTicket, fetchPostTicket, fetchDeleteTicket } from '../../api';
import { initialData } from '../../utils';

export const getTicketsAsync = createAsyncThunk(
  'ticket/getTickets',
  async () => {
    const response = await fetchAllTicket();
    return response;
  }
);

export const postTicketAsync = createAsyncThunk(
  'ticket/postTicket',
  async (userData) => {
    const response = await fetchPostTicket(userData);
    return response;

  }
);

export const deleteTicketAsync = createAsyncThunk(
  'ticket/deleteTicket',
  async (id) => {
    const response = await fetchDeleteTicket(id);
    return response;
  }
);

export const ticketReducer = createSlice({
  name: 'ticket',
  initialState: {
    status: 'idle',
    ticketsData: initialData,
    getTicketsError: null,
    deleteError: null,
    postTicketError: null
  },
  reducers: {
    setInitalData: (state, action) => {
      state.ticketsData = action.payload;
    },
    setGetTicketsError: (state, action) => {
      state.getTicketsError = action.payload;
    },
    setDeleteError: (state, action) => {
      state.deleteError = action.payload;
    },
    setPostTicketError: (state, action) => {
      state.postTicketError = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTicketsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTicketsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        if (action.payload.tickets) {
          state.ticketsData.tickets = action.payload.tickets;
          for (let value of action.payload.tickets) {
            state.ticketsData.columns[value.status].ticketIds.push(value.ticket_id)
          }
        } else {
          state.getTicketsError = action.payload.errno;
        }
      })
      .addCase(deleteTicketAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteTicketAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.deleteError = action.payload.errno;
      })
      .addCase(postTicketAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(postTicketAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.postTicketError = action.payload.errno;
      })
  },
});

export const {
  setInitalData,
  setGetTicketsError,
  setDeleteError,
  setPostTicketError
} = ticketReducer.actions;

export const selectTicketsData = state => state.ticket.ticketsData;
export const selectTickets = state => state.ticket.ticketsData.tickets;
export const selectColumnOrder = state => state.ticket.ticketsData.columnOrder;
export const selectColumns = state => state.ticket.ticketsData.columns;
export const selectStatus = state => state.ticket.status;
export const selectGetTicketsError = state => state.ticket.getTicketsError;
export const selectDeleteError = state => state.ticket.deleteError;
export const selectPostTicketError = state => state.ticket.postTicketError;

export default ticketReducer.reducer;
