import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {MainScreen, PeopleScreen} from '../screens';

export type RootStackParamList = {
  Main: undefined;
  People: {name: string};
};

export const RootNavigation = () => {
  /**
   * Values
   */
  const Stack = createNativeStackNavigator<RootStackParamList>();

  /**
   * Render
   */
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="People" component={PeopleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
