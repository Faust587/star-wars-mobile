import {
  SelectedPeopleType,
  StarWarsPeopleType,
} from '../../../../redux/starWarsPeople/starWarsPeople.types.ts';
import React, {FC} from 'react';
import {Text} from 'react-native';
import {DataTable, IconButton} from 'react-native-paper';
import {HeartIcon} from '../../../../shared/components';
import {useAppSelector} from '../../../../hooks/redux.ts';
import {PeopleItem} from '../PeopleItem/PeopleItem.tsx';

type PeopleListProps = {
  list: StarWarsPeopleType[];
  page: number;
  itemsCount: number;
  onPageChange: (page: number) => void;
  onItemSelect: (people: SelectedPeopleType) => void;
};

export const PeopleList: FC<PeopleListProps> = ({
  list,
  page,
  itemsCount,
  onItemSelect,
  onPageChange,
}) => {
  /**
   * Hooks
   */
  const selectedPeople = useAppSelector(
    state => state.starWarsPeople.selectedPeople,
  );

  /**
   * Values
   */
  const pagesCount = Math.ceil(itemsCount / 10);

  /**
   * Render
   */
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
        const isSelected = selectedPeople.find(
          people => people.name === item.name,
        );
        const {name, gender, birth_year} = item;

        return (
          <PeopleItem
            key={name}
            name={name}
            gender={gender}
            birth_year={birth_year}
            isSelected={!!isSelected}
            onItemSelect={onItemSelect}
          />
        );
      })}

      {/*Need to install fonts to display arrows*/}
      <DataTable.Pagination
        page={page}
        numberOfPages={pagesCount}
        onPageChange={onPageChange}
        numberOfItemsPerPage={10}
      />
    </DataTable>
  );
};
