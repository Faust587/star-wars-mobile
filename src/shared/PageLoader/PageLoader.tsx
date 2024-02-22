import {ActivityIndicator} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import React from 'react';

export const PageLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" animating={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
});
