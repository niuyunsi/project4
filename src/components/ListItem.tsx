import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ImageSourcePropType } from 'react-native';

interface IProps {
  image?: ImageSourcePropType;
  onPressItem: () => void;
  name: string;
}

const ListItem = (props: IProps) => (
  <TouchableOpacity onPress={props.onPressItem}>
    <View style={styles.listItem}>
      {props.image && <Image style={styles.image} source={props.image} />}
      <Text>{props.name}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height: 30,
    width: 30,
    marginRight: 8
  }
});

export default ListItem;
