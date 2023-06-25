import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './operations';

export const curencySlice = createSlice({
  name: 'curency',
  initialState: {
    baseCurency: '',
  },
  extraReducers: {
    [fetchBaseCurrency.fulfilled](state, action) {
      state.baseCurency = action.payload;
    },
  },
});
