import {StarWarsPeopleType} from '../../../../redux/starWarsPeople/starWarsPeople.types.ts';
import React, {FC} from 'react';
import {Text} from 'react-native';
import {DataTable, IconButton} from 'react-native-paper';
import {HeartIcon} from '../../../../shared/Icons/HeartIcon.tsx';
import {useAppSelector} from '../../../../hooks/redux.ts';

type PeopleListProps = {
  list: StarWarsPeopleType[];
  page: number;
  itemsCount: number;
  onPageChange: (page: number) => void;
  onItemSelect: (id: string) => void;
};

export const PeopleList: FC<PeopleListProps> = ({
  list,
  page,
  itemsCount,
  onItemSelect,
  onPageChange,
}) => {
  const selectedPeople = useAppSelector(
    state => state.starWarsPeople.selectedPeople,
  );

  const pagesCount = Math.ceil(itemsCount / 10);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>
          <IconButton disabled iconColor="black" icon={HeartIcon} />
        </DataTable.Title>
        <DataTable.Title>
          <Text>Name</Text>
        </DataTable.Title>
        <DataTable.Title>
          <Text>Birth year</Text>
        </DataTable.Title>
        <DataTable.Title>
          <Text>Gender</Text>
        </DataTable.Title>
      </DataTable.Header>

      {list.map(item => {
        const isSelected = selectedPeople.find(people => people === item.name);
        return (
          <DataTable.Row key={item.name}>
            <DataTable.Cell>
              <IconButton
                onPress={() => onItemSelect(item.name)}
                iconColor={isSelected ? '#E24848' : '#000000'}
                icon={HeartIcon}
              />
            </DataTable.Cell>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell numeric>{item.birth_year}</DataTable.Cell>
            <DataTable.Cell numeric>{item.gender}</DataTable.Cell>
          </DataTable.Row>
        );
      })}

      <DataTable.Pagination
        page={page}
        numberOfPages={pagesCount}
        onPageChange={onPageChange}
        numberOfItemsPerPage={10}
      />
    </DataTable>
  );
};
