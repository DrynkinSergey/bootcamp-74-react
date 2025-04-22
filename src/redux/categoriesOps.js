//https://6805ee0eca467c15be6a7236.mockapi.io/transactions

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const myApi = axios.create({
  baseURL: 'https://6805ee0eca467c15be6a7236.mockapi.io',
});

export const fetchCategoriesThunk = createAsyncThunk('getCategories', async (_, thunkAPI) => {
  try {
    const response = await myApi.get('/categories');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
