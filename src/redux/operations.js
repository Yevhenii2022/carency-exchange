import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentPosition } from 'service/service';

export const fetchBaseCurrency = createAsyncThunk(
  'curency/fetch',
  async (credentials, thunkAPI) => {

    const state = thunkAPI.getState();
    const persistedbaseCurency = state.curency.baseCurency;

    if (persistedbaseCurency) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      const res = await getCurrentPosition(credentials);

      return res.results[0].annotations.currency.iso_code;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
