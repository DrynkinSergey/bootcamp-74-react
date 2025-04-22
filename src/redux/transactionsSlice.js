import { createSlice } from '@reduxjs/toolkit';
import { addTransactionThunk, deleteTransactionThunk, editTransactionThunk, fetchTransactions } from './transactionsOps';

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
      })
      .addCase(deleteTransactionThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(editTransactionThunk.fulfilled, (state, action) => {
        state.items = state.items.map(item => (item.id === action.payload.id ? action.payload : item));
      });
  },
});

export const transactionsReducer = slice.reducer;

export const selectTransactions = state => state.transactions.items;
