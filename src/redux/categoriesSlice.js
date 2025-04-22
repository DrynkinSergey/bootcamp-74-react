import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const slice = createSlice({
  name: 'categories',
  initialState,
});

export const categoriesReducer = slice.reducer;

export const selectCategories = state => state.categories.categories;
