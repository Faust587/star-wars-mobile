import {rootAPI} from './axios.ts';

export type GetPeoplesParamsType = {
  page: number;
};

export const starWarsPeopleAPI = {
  getPeoples: async (params: GetPeoplesParamsType) => {
    return await rootAPI.get('/people', {params});
  },
};
