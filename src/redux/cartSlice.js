import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    clearCart: (state, action) => initialState,
  },
});

export const cartReducer = slice.reducer;
export const { addToCart, removeFromCart, clearCart } = slice.actions;
