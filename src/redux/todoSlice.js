import { createSlice } from '@reduxjs/toolkit';
import { deleteTodoThunk, fetchTodos } from './operations';

const initialState = {
  todos: [],
  filter: '',
  isError: false,
  isLoading: false,
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
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTodos.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteTodoThunk.fulfilled, (state, action) => {
        state.todos = state.todos.filter(item => item.id !== action.payload);
      });
  },
});

export const todoReducer = slice.reducer;
export const { addTodo, deleteTodo, changeFilter } = slice.actions;
