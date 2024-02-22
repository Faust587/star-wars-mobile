import {configureStore} from '@reduxjs/toolkit';
import {starWarsPeopleReducer} from './starWarsPeople';

export const store = configureStore({
  reducer: {
    starWarsPeople: starWarsPeopleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
