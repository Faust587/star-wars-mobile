import {createAsyncThunk} from '@reduxjs/toolkit';
import {SLICE_NAME} from './starWarsPeople.constants.ts';
import {
  GetPeoplesParamsType,
  starWarsPeopleAPI,
} from '../../api/starWarsPeople.ts';
import axios from 'axios';

export const GetStarWarsPeople = createAsyncThunk(
  `${SLICE_NAME}/GetStarWarsPeople`,
  async (params: GetPeoplesParamsType, thunkAPI) => {
    const res = await starWarsPeopleAPI.getPeoples(params);

    if (axios.isAxiosError(res)) {
      return thunkAPI.rejectWithValue(res);
    }

    return res.data;
  },
);
