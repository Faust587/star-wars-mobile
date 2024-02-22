import {InitialStateType} from './starWarsPeople.types.ts';
import {LoadingStatusEnum} from '../../enums/index.ts';

export const SLICE_NAME = 'starWarsPeople';

export const INITIAL_STATE: InitialStateType = {
  list: [],
  loading: LoadingStatusEnum.IDLE,
  recordsCount: null,
  page: 1,
  selectedPeople: [],
};
