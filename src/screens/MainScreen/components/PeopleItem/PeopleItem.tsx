import React, {FC, memo} from 'react';
import {DataTable, IconButton} from 'react-native-paper';
import {HeartIcon} from '../../../../shared/components';
import {SelectedPeopleType} from '../../../../redux/starWarsPeople/starWarsPeople.types.ts';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../../navigations/RootNavigation.tsx';

type PeopleItemProps = {
  name: string;
  gender: string;
  birth_year: string;
  isSelected: boolean;
  onItemSelect: (people: SelectedPeopleType) => void;
};

const PeopleItemComponent: FC<PeopleItemProps> = ({
  name,
  gender,
  birth_year,
  isSelected,
  onItemSelect,
}) => {
  /**
   * Hooks
   */
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  /**
   * Render
   */
  return (
    <DataTable.Row
      key={name}
      onPress={() => navigation.navigate('People', {name})}>
      <DataTable.Cell>
        <IconButton
          onPress={() => onItemSelect({name, gender})}
          iconColor={isSelected ? '#E24848' : '#000000'}
          icon={HeartIcon}
        />
      </DataTable.Cell>
      <DataTable.Cell>{name}</DataTable.Cell>
      <DataTable.Cell numeric>{birth_year}</DataTable.Cell>
      <DataTable.Cell numeric>{gender}</DataTable.Cell>
    </DataTable.Row>
  );
};
export const PeopleItem = memo(PeopleItemComponent);
