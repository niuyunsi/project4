import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Place } from '../../App';
import ListItem from './ListItem';

interface IProps {
  onPlaceSelected: (key: string) => void;
  places: Place[];
}

const PlaceList = (props: IProps) => {
  return (
    <FlatList
      data={props.places}
      renderItem={({ item }) => (
        <ListItem
          name={item.name}
          image={item.image}
          onItemPressed={() => props.onPlaceSelected(item.key)}
        />
      )}
      style={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '80%'
  }
});

export default PlaceList;
