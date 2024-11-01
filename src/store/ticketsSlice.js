import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../api.js';

export const searchId = createAsyncThunk('tickets/searchId', api.getSearchID);

// eslint-disable-next-line no-unused-vars
export const getTickets = createAsyncThunk('tickets/getTickets', async function (_, { dispatch, getState }) {
  const tickets = await api.getTickets(getState().tickets.id);
  if (!tickets) {
    dispatch(getTickets());
    return { stop: false, tickets: [] };
  } else {
    if (!tickets.stop) dispatch(getTickets());
    return {
      stop: tickets.stop,
      tickets: tickets.tickets,
    };
  }
});

const tickets = createSlice({
  name: 'tickets',
  initialState: {
    id: null,
    tickets: [],
    load: true,
    countOfTickets: 5,
  },
  reducers: {
    onShow(state) {
      state.countOfTickets = state.countOfTickets + 5;
    },
    onShowNoun(state) {
      state.countOfTickets = 5;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchId.fulfilled, (state, action) => {
        if (action.payload) {
          state.id = action.payload;
        } else searchId();
      })
      .addCase(getTickets.fulfilled, (state, action) => {
        state.tickets = [...state.tickets, ...action.payload.tickets];
        if (action.payload.stop) state.load = false;
      });
  },
});

export const { onShow, onShowNoun } = tickets.actions;
export default tickets.reducer;
