import { configureStore } from '@reduxjs/toolkit';

import { todoReducer } from './todoSlice';
import { authReducer } from './auth/slice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { postsApi } from './postsApi';
import { setupListeners } from '@reduxjs/toolkit/query';

const persistConfig = {
  key: 'root-auth',
  version: 1,
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    auth: persistReducer(persistConfig, authReducer),
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(postsApi.middleware),
});
setupListeners(store.dispatch);

export let persistor = persistStore(store);
