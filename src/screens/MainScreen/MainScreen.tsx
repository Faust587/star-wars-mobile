import React, {useCallback, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux.ts';
import {GetStarWarsPeople} from '../../redux/starWarsPeople/starWarsPeople.thunk.ts';
import {SafeAreaView, View} from 'react-native';
import {LoadingStatusEnum} from '../../enums/index.ts';
import {PageLoader} from '../../shared/PageLoader/PageLoader.tsx';
import {PeopleList} from './components/PeopleList/PeopleList.tsx';
import {
  ChangePeoplePage,
  LikePeople,
} from '../../redux/starWarsPeople/index.ts';

export const MainScreen = () => {
  const dispatch = useAppDispatch();

  const list = useAppSelector(state => state.starWarsPeople.list);
  const page = useAppSelector(state => state.starWarsPeople.page);
  const recordsCount = useAppSelector(
    state => state.starWarsPeople.recordsCount,
  );
  const isLoading =
    useAppSelector(state => state.starWarsPeople.loading) ===
    LoadingStatusEnum.PENDING;

  const onItemSelect = useCallback(
    (id: string) => {
      dispatch(LikePeople(id));
    },
    [dispatch],
  );

  const onPageChange = useCallback(
    (page: number) => {
      dispatch(ChangePeoplePage(page));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(GetStarWarsPeople({page}));
  }, [dispatch, page]);

  return (
    <SafeAreaView>
      {isLoading && <PageLoader />}
      <View></View>
      {!isLoading && (
        <PeopleList
          list={list}
          onItemSelect={onItemSelect}
          page={page}
          itemsCount={recordsCount ?? 0}
          onPageChange={onPageChange}
        />
      )}
    </SafeAreaView>
  );
};
