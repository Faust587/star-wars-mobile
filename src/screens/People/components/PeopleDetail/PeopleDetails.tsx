import React, {FC, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  DetailItem,
  DetailItemProps,
} from './components/DetailItem/DetailItem.tsx';

type PeopleDetailsProps = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
};

const PeopleDetailsComponent: FC<PeopleDetailsProps> = ({
  gender,
  birth_year,
  eye_color,
  skin_color,
  hair_color,
  mass,
  height,
}) => {
  /**
   * Values
   */
  const details: DetailItemProps[] = [
    {keyName: 'Gender', value: gender},
    {keyName: 'Birth year', value: birth_year},
    {keyName: 'Eye color', value: eye_color},
    {keyName: 'Skin color', value: skin_color},
    {keyName: 'Hair color', value: hair_color},
    {keyName: 'Mass', value: `${mass}kg`},
    {keyName: 'Height', value: `${height}cm`},
  ];

  /**
   * Render
   */
  return (
    <View style={styles.container}>
      {details.map(({value, keyName}) => (
        <DetailItem key={keyName} keyName={keyName} value={value} />
      ))}
    </View>
  );
};

export const PeopleDetails = memo(PeopleDetailsComponent);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    paddingHorizontal: '2%',
    width: '100%',
  },
});
