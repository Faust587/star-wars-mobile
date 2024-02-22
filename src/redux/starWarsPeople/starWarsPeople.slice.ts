import {createSlice} from '@reduxjs/toolkit';
import {INITIAL_STATE, SLICE_NAME} from './starWarsPeople.constants.ts';
import {
  ChangePeoplePageReducer,
  GetStarWarsPeopleReducer,
  LikePeopleReducer,
} from './starWarsPeople.reducers.ts';

const starWarsPeopleSlice = createSlice({
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    LikePeople: LikePeopleReducer,
    ChangePeoplePage: ChangePeoplePageReducer,
  },
  extraReducers: GetStarWarsPeopleReducer,
});

export const {reducer, actions} = starWarsPeopleSlice;
