// https://task-manager-api.goit.global/
//serhii1234@mail.com
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const goitApi = axios.create({
  baseURL: 'https://task-manager-api.goit.global',
});

export const registerThunk = createAsyncThunk('register', async (credentials, thunkAPI) => {
  try {
    const response = await goitApi.post('/users/signup', credentials);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const loginThunk = createAsyncThunk('login', async (credentials, thunkAPI) => {
  try {
    const response = await goitApi.post('/users/login', credentials);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logoutThunk = createAsyncThunk('logout', async (_, thunkAPI) => {
  console.log(thunkAPI.getState());

  try {
    await goitApi.post('/users/logout', null, {
      headers: {
        Authorization: thunkAPI.getState().auth.token,
      },
    });
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
