import {LoadingStatusEnum} from '../../enums/index.ts';

export type InitialStateType = {
  list: StarWarsPeopleType[];
  loading: LoadingStatusEnum;
  recordsCount: number | null;
  page: number;
  selectedPeople: string[];
};

export type StarWarsPeopleType = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};
