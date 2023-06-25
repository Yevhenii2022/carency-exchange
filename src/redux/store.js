import { curencySlice } from './currentSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    curency: curencySlice.reducer,
  },
});
