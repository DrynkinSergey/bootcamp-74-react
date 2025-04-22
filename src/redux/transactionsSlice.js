import { createSlice } from '@reduxjs/toolkit';
import { addTransactionThunk, fetchTransactions } from './transactionsOps';

const initialState = {
  items: [],
};

const slice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTransactionThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export const transactionsReducer = slice.reducer;

export const selectTransactions = state => state.transactions.items;
