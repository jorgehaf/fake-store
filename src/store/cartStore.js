import { createSlice } from '@reduxjs/toolkit';

const cartStore = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addToCart } = cartStore.actions;
export const getCartItems = (state) => state.cart.items;
export const getCartTotal = (state) => {
  return state.cart.items.reduce((total, item) => total + item.price, 0)
};

export default cartStore.reducer;
