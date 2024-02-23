import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export type DetailItemProps = {
  keyName: string;
  value: string;
};

export const DetailItem: FC<DetailItemProps> = ({keyName, value}) => (
  <View style={styles.itemContainer}>
    <Text style={styles.textStyles}>{keyName}</Text>
    <Text style={styles.textStyles}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyles: {
    fontSize: 20,
    lineHeight: 40,
  },
});
