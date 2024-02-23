import {ActionReducerMapBuilder, PayloadAction} from '@reduxjs/toolkit';
import {InitialStateType, SelectedPeopleType} from './starWarsPeople.types.ts';
import {GetStarWarsPeople} from './starWarsPeople.thunk.ts';
import {LoadingStatusEnum} from '../../enums/index.ts';

export const LikePeopleReducer = (
  state: InitialStateType,
  action: PayloadAction<SelectedPeopleType>,
) => {
  const people = action.payload;
  const isLiked = state.selectedPeople.find(item => item.name === people.name);
  if (isLiked) {
    state.selectedPeople = state.selectedPeople.filter(
      item => item.name !== people.name,
    );
  } else {
    state.selectedPeople = [...state.selectedPeople, people];
  }
};

export const ChangePeoplePageReducer = (
  state: InitialStateType,
  action: PayloadAction<number>,
) => {
  state.page = action.payload;
};

export const GetStarWarsPeopleReducer = (
  builder: ActionReducerMapBuilder<InitialStateType>,
) => {
  builder.addCase(GetStarWarsPeople.pending, state => {
    state.loading = LoadingStatusEnum.PENDING;
  });
  builder.addCase(GetStarWarsPeople.fulfilled, (state, action) => {
    state.loading = LoadingStatusEnum.SUCCESS;
    state.list = action.payload.results;
    state.recordsCount = action.payload.count;
  });
};

export const ResetSelectedPeopleReducer = (state: InitialStateType) => {
  state.selectedPeople = [];
};
