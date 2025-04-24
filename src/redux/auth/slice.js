import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: {
    name: '',
    email: '',
  },
  token: '',
};

const slice = createSlice({
  name: 'auth',
  initialState,
});

export const authReducer = slice.reducer;
