import { configureStore } from '@reduxjs/toolkit';

import { todoReducer } from './todoSlice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    auth: authReducer,
  },
});
