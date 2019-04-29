import React from 'react';
import {
  Button,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Place } from '../store/reducers/places';

interface IProps {
  onDeletePlace: () => void;
  onCloseModal: () => void;
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
    <Modal animationType="slide" onRequestClose={props.onCloseModal} visible={props.selectedPlace !== undefined}>
      <SafeAreaView style={styles.modalContainer}>
        {modalContent}
        <View>
          <TouchableOpacity onPress={props.onDeletePlace}>
            <View style={styles.deleteButton}>
              <Icon size={30} name="ios-trash" color="red" />
            </View>
          </TouchableOpacity>
          <Button title="Close" onPress={props.onCloseModal} />
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
  },
  deleteButton: {
    alignItems: 'center'
  }
});

export default PlaceDetail;
