import React, {useLayoutEffect} from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {RootStackParamList} from '../../navigations/RootNavigation.tsx';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useData} from './hooks';
import {PeopleDetails} from './components';

export const PeopleScreen = () => {
  /**
   * Hooks
   */
  const {params} = useRoute<RouteProp<RootStackParamList, 'People'>>();

  const navigation = useNavigation();
  const {people} = useData({name: params.name});

  /**
   * Effects
   */
  useLayoutEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, [navigation, params.name]);

  /**
   * Render
   */
  return (
    <SafeAreaView>
      <StatusBar />
      {!people && <Text>Not found</Text>}
      {people && <PeopleDetails {...people} />}
    </SafeAreaView>
  );
};
