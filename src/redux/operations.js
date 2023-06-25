import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentPosition } from 'service/service';

export const fetchBaseCurrency = createAsyncThunk(
  'curency/fetch',
  async (credentials, thunkAPI) => {
    try {
      const res = await getCurrentPosition(credentials);

      return res.results[0].annotations.currency.iso_code;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
