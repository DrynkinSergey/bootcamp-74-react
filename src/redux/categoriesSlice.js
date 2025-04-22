import { createSlice } from '@reduxjs/toolkit';
import { fetchCategoriesThunk } from './categoriesOps';

const initialState = {
  categories: [],
};

const slice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchCategoriesThunk.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const categoriesReducer = slice.reducer;

export const selectCategories = state => state.categories.categories;
