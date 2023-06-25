import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './operations';

export const curencySlice = createSlice({
  name: 'curency',
  initialState: {
    baseCurency: '',
  },
  reducers: {
    setCurency(state, action) {
      state.baseCurency = action.payload;
    }
  },
  extraReducers: {
    [fetchBaseCurrency.fulfilled](state, action) {
      state.baseCurency = action.payload;
    },
  },
});
export const { setCurency } = curencySlice.actions;
