/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import PlaceList from './src/components/PlaceList';
import PlaceInput from './src/components/PlaceInput';
import PlaceDetail from './src/components/PlaceDetail';
import { Place, PlacesState } from './src/store/reducers/places';
import { AppState } from './src/store/configureStore';
import { addPlace, deletePlace, deselectPlace, selectPlace } from './src/store/actions';

interface IProps {}
interface IState {}

export class App extends Component<IProps & IConnectedState & IConnectedDispatch, IState> {
  render() {
    const {
      places: { places, selectedPlace }
    } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <PlaceDetail
          onPlaceDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
          selectedPlace={selectedPlace}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList onPlaceSelected={this.placeSelectedHandler} places={places} />
      </SafeAreaView>
    );
  }

  private placeAddedHandler = (name: string) => {
    this.props.addPlace(name);
  };

  private placeDeletedHandler = () => {
    this.props.deletePlace();
  };

  private placeSelectedHandler = (key: string) => {
    this.props.selectPlace(key);
  };

  private modalClosedHandler = () => {
    this.props.deselectPlace();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 50
  }
});

interface IConnectedState {
  places: PlacesState;
}

interface IConnectedDispatch {
  addPlace: (placeName: string) => void;
  deletePlace: () => void;
  selectPlace: (key: string) => void;
  deselectPlace: () => void;
}

const mapStateToProps = (state: AppState): IConnectedState => {
  return {
    places: state.places
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IConnectedDispatch => {
  return {
    addPlace: (placeName: string) => dispatch(addPlace(placeName)),
    deletePlace: () => dispatch(deletePlace()),
    selectPlace: (key: string) => dispatch(selectPlace(key)),
    deselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
