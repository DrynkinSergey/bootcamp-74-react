import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from './counterSlice';
import { todoReducer } from './todoSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root-todos',
  version: 1,
  storage,
  whitelist: ['todos'],
  // blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, todoReducer);
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
