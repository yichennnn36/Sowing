import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialData } from '../../utils';
import {
  fetchAllTickets,
  fetchPostTicket,
  fetchDeleteTicket,
  fetchEditTicket,
  fetchUpdateTicketStatus
} from '../../api';

export const getTicketsAsync = createAsyncThunk(
  'ticket/getTickets',
  async () => {
    const response = await fetchAllTickets();
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

export const editTicketAsync = createAsyncThunk(
  'ticket/editTicket',
  async (ticketData) => {
    const response = await fetchEditTicket(ticketData);
    return response;
  }
);

export const updateTicketStatusAsync = createAsyncThunk(
  'ticket/updateStatus',
  async (ticketStatus) => {
    const response = await fetchUpdateTicketStatus(ticketStatus);
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
    postTicketError: null,
    editError: null,
    updateTicketStatusError: null
  },
  reducers: {
    setInitialData: (state, action) => {
      state.ticketsData = action.payload;
    },
    setInitialError: (state, action) => {
      state.getTicketsError = action.payload;
      state.deleteError = action.payload;
      state.postTicketError = action.payload;
      state.editError = action.payload;
      state.updateTicketStatusError = action.payload;
    },
    setGetTicketsError: (state, action) => {
      state.getTicketsError = action.payload;
    },
    setDeleteError: (state, action) => {
      state.deleteError = action.payload;
    },
    setPostTicketError: (state, action) => {
      state.postTicketError = action.payload;
    },
    setEditError: (state, action) => {
      state.editError = action.payload;
    },
    setUpdateTicketStatusError: (state, action) => {
      state.updateTicketStatusError = action.payload;
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
      .addCase(deleteTicketAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.deleteError = action.payload.errno;
      })
      .addCase(postTicketAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.postTicketError = action.payload.errno;
      })
      .addCase(editTicketAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.editError = action.payload.errno;
      })
      .addCase(updateTicketStatusAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.updateTicketStatusError = action.payload.errno;
      })
  },
});

export const {
  setInitialData,
  setInitialError,
  setGetTicketsError,
  setDeleteError,
  setPostTicketError,
  setEditError,
  setUpdateTicketStatusError,
} = ticketReducer.actions;

export const selectState = state => state.ticket;
export const selectTicketsData = state => state.ticket.ticketsData;

export default ticketReducer.reducer;
