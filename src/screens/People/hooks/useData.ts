import {useAppSelector} from '../../../hooks/redux.ts';

type UseDataProps = {name: string};

export const useData = ({name}: UseDataProps) => {
  /**
   * Hooks
   */
  const peoples = useAppSelector(state => state.starWarsPeople.list);

  /**
   * Values
   */
  const people = peoples.find(item => item.name === name);

  /**
   * Result
   */
  return {people};
};
