import { configureStore } from '@reduxjs/toolkit';

import { todoReducer } from './todoReducer';
import { counterReducer } from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
  },
});
