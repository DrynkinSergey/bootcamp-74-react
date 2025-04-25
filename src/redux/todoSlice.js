import { createSelector, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addTodoThunk, changeTitleThunk, deleteTodoThunk, fetchTodos, toggleCompletedTodoThunk } from './operations';
import { logoutThunk } from './auth/operations';

const initialState = {
  todos: [],
  filter: '',
  selectedTab: 'all',
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
    changeSelectedTab: (state, action) => {
      state.selectedTab = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })

      .addCase(logoutThunk.fulfilled, () => initialState)
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
export const { changeFilter, changeSelectedTab } = slice.actions;

export const selectTodos = state => state.todos.todos;
export const selectFilter = state => state.todos.filter;
export const selectIsLoading = state => state.todos.isLoading;
export const selectIsError = state => state.todos.isError;
export const selectTab = state => state.todos.selectedTab;

export const selectTodosByTab = state => {
  const todos = selectTodos(state);
  const tab = selectTab(state);
  console.log('SELECT LOGIC');
  switch (tab) {
    case 'active':
      return todos.filter(item => !item.completed);
    case 'completed':
      return todos.filter(item => item.completed);

    default:
      return todos;
  }
};

export const selectTodosByTabMemo = createSelector([selectTodos, selectTab], (todos, tab) => {
  console.log('SELECT LOGIC');

  switch (tab) {
    case 'active':
      return todos.filter(item => !item.completed);
    case 'completed':
      return todos.filter(item => item.completed);

    default:
      return todos;
  }
});

export const selectUncompletedTodos = state => {
  console.log('UNCOMPLETE COUNT LOGIC');

  const todos = selectTodos(state);
  return todos.reduce((total, curr) => !curr.completed && total + 1, 0);
};

export const selectUncompletedTodosMemo = createSelector([selectTodos], todos => {
  console.log('UNCOMPLETE COUNT LOGIC');
  return todos.reduce((total, curr) => (!curr.completed ? total + 1 : total), 0);
});
