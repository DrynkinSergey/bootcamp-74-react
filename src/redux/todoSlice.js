import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addTodoThunk, changeTitleThunk, deleteTodoThunk, fetchTodos, toggleCompletedTodoThunk } from './operations';

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
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(deleteTodoThunk.fulfilled, (state, action) => {
        state.todos = state.todos.filter(item => item.id !== action.payload);
      })
      .addCase(addTodoThunk.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(toggleCompletedTodoThunk.fulfilled, (state, action) => {
        // state.todos = state.todos.map(item => (item.id === action.payload.id ? action.payload : item));
        const item = state.todos.find(item => item.id === action.payload.id);
        item.completed = !item.completed;
      })
      .addCase(changeTitleThunk.fulfilled, (state, action) => {
        const item = state.todos.find(item => item.id === action.payload.id);
        if (item) {
          item.todo = action.payload.todo;
        }
      })
      //
      .addMatcher(
        isAnyOf(changeTitleThunk.pending, addTodoThunk.pending, toggleCompletedTodoThunk.pending, deleteTodoThunk.pending, fetchTodos.pending),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(changeTitleThunk.rejected, addTodoThunk.rejected, toggleCompletedTodoThunk.rejected, deleteTodoThunk.rejected, fetchTodos.rejected),
        (state, action) => {
          state.isError = action.payload;
          state.isLoading = false;
        }
      )

      .addMatcher(
        isAnyOf(
          changeTitleThunk.fulfilled,
          addTodoThunk.fulfilled,
          toggleCompletedTodoThunk.fulfilled,
          deleteTodoThunk.fulfilled,
          fetchTodos.fulfilled
        ),
        state => {
          state.isLoading = false;
        }
      );
  },
});

export const todoReducer = slice.reducer;
export const { changeFilter } = slice.actions;
