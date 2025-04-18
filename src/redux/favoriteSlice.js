import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const slice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFav: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFav: (state, action) => {
      state.favorites = state.favorites.filter(item => item.id !== action.payload);
    },
  },
});
export const favoriteReducer = slice.reducer;
export const { addToFav, removeFromFav } = slice.actions;
