import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './productsSlice';
import { cartReducer } from './cartSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { favoriteReducer } from './favoriteSlice';

const persistConfig = {
  key: 'cart',
  version: 1,
  storage,
};
const persistFavConfig = {
  key: 'favorites',
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, cartReducer);
const persistedFavReducer = persistReducer(persistFavConfig, favoriteReducer);
export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: persistedReducer,
    favorites: persistedFavReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
