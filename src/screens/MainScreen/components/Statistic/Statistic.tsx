import React, {FC} from 'react';
import {useAppSelector} from '../../../../hooks/redux.ts';
import {PeopleGender} from '../../../../enums';
import {StyleSheet, Text, View} from 'react-native';
import {Chip} from 'react-native-paper';

export type StatisticProps = {
  onResetSelectedPeople: () => void;
};

export const Statistic: FC<StatisticProps> = ({onResetSelectedPeople}) => {
  /**
   * Hooks
   */
  const selectedPeople = useAppSelector(
    state => state.starWarsPeople.selectedPeople,
  );

  /**
   * Values
   */
  const maleCount = selectedPeople.filter(
    people => people.gender === PeopleGender.MALE,
  ).length;

  const femaleCount = selectedPeople.filter(
    people => people.gender === PeopleGender.FEMALE,
  ).length;

  const otherCount = selectedPeople.filter(
    people =>
      people.gender !== PeopleGender.MALE &&
      people.gender !== PeopleGender.FEMALE,
  ).length;

  /**
   * Render
   */
  return (
    <View style={styles.container}>
      <Chip style={styles.chip}>
        <Text>Male: {maleCount}</Text>
      </Chip>
      <Chip style={styles.chip}>
        <Text>Female: {femaleCount}</Text>
      </Chip>
      <Chip style={styles.chip}>
        <Text>Other: {otherCount}</Text>
      </Chip>
      <Chip style={styles.chip} mode="outlined" onPress={onResetSelectedPeople}>
        <Text>Clear</Text>
      </Chip>
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    marginHorizontal: '1%',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
