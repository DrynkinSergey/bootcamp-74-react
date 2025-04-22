import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const slice = createSlice({
  name: 'transactions',
  initialState,
});

export const transactionsReducer = slice.reducer;

export const selectTransactions = state => state.transactions.items;
