import React from 'react';
import {
  Button,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType
} from 'react-native';

import { Place } from '../store/reducers/places';

interface IProps {
  onPlaceDeleted: () => void;
  onModalClosed: () => void;
  selectedPlace?: Place;
}

const PlaceDetail = (props: IProps) => {
  let modalContent = null;
  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image style={styles.image} source={props.selectedPlace.image} />
        <Text style={styles.name}>{props.selectedPlace.name}</Text>
      </View>
    );
  }
  return (
    <Modal
      animationType="slide"
      onRequestClose={props.onModalClosed}
      visible={props.selectedPlace !== undefined}
    >
      <SafeAreaView style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title="Delete" onPress={props.onPlaceDeleted} />
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {},
  image: {
    height: 200,
    width: '100%',
    marginRight: 8
  },
  name: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  }
});

export default PlaceDetail;
