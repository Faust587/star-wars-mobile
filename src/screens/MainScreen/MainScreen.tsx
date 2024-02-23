import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {PageLoader} from '../../shared/PageLoader/PageLoader.tsx';
import {PeopleList} from './components/PeopleList/PeopleList.tsx';
import {Statistic} from './components/Statistic/Statistic.tsx';
import {useData} from './hooks';
import {useNavigation} from '@react-navigation/native';

export const MainScreen = () => {
  /**
   * Hooks
   */
  const {
    list,
    page,
    recordsCount,
    isLoading,
    onItemSelect,
    onPageChange,
    onResetSelectedPeople,
  } = useData();

  /**
   * Render
   */
  return (
    <SafeAreaView>
      <StatusBar />
      <Statistic onResetSelectedPeople={onResetSelectedPeople} />

      {isLoading && <PageLoader />}

      {!isLoading && (
        <PeopleList
          list={list}
          onItemSelect={onItemSelect}
          page={page}
          itemsCount={recordsCount ? recordsCount : 0}
          onPageChange={onPageChange}
        />
      )}
    </SafeAreaView>
  );
};
