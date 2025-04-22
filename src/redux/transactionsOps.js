import { createAsyncThunk } from '@reduxjs/toolkit';
import { myApi } from './categoriesOps';

export const fetchTransactions = createAsyncThunk('fetchAllTransactions', async (_, thunkAPI) => {
  try {
    const response = await myApi.get('/transactions');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addTransactionThunk = createAsyncThunk('addTransaction', async (body, thunkAPI) => {
  try {
    const response = await myApi.post('/transactions', body);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
