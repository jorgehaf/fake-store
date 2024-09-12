import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartStore';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
