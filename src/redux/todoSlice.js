import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  filter: '',
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(item => item.id !== action.payload);
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const todoReducer = slice.reducer;
export const { addTodo, deleteTodo, changeFilter } = slice.actions;
