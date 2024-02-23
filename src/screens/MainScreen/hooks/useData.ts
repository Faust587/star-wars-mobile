import {useAppDispatch, useAppSelector} from '../../../hooks/redux.ts';
import {LoadingStatusEnum} from '../../../enums';
import {useCallback, useEffect} from 'react';
import {SelectedPeopleType} from '../../../redux/starWarsPeople/starWarsPeople.types.ts';
import {
  ChangePeoplePage,
  LikePeople,
  ResetSelectedPeople,
} from '../../../redux/starWarsPeople';
import {GetStarWarsPeople} from '../../../redux/starWarsPeople/starWarsPeople.thunk.ts';

export const useData = () => {
  /**
   * Hooks
   */
  const dispatch = useAppDispatch();

  const list = useAppSelector(state => state.starWarsPeople.list);
  const page = useAppSelector(state => state.starWarsPeople.page);
  const recordsCount = useAppSelector(
    state => state.starWarsPeople.recordsCount,
  );
  const isLoading =
    useAppSelector(state => state.starWarsPeople.loading) ===
    LoadingStatusEnum.PENDING;

  /**
   * Handlers
   */
  const onItemSelect = useCallback(
    (people: SelectedPeopleType) => {
      dispatch(LikePeople(people));
    },
    [dispatch],
  );

  const onPageChange = useCallback(
    (page: number) => {
      if (page === 0) return;

      dispatch(ChangePeoplePage(page));
    },
    [dispatch],
  );

  const onResetSelectedPeople = useCallback(() => {
    dispatch(ResetSelectedPeople());
  }, [dispatch]);

  /**
   * Effects
   */
  useEffect(() => {
    dispatch(GetStarWarsPeople({page}));
  }, [dispatch, page]);

  /**
   * Result
   */
  return {
    list,
    page,
    recordsCount,
    isLoading,
    onItemSelect,
    onPageChange,
    onResetSelectedPeople,
  };
};
