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
import { PlacesState } from './src/store/reducers/places';
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
          onDeletePlace={this.deletePlaceHandler}
          onCloseModal={this.closeModalHandler}
          selectedPlace={selectedPlace}
        />
        <PlaceInput onAddPlace={this.addPlaceHandler} />
        <PlaceList onSelectPlace={this.selectPlaceHandler} places={places} />
      </SafeAreaView>
    );
  }

  private addPlaceHandler = (name: string) => {
    this.props.addPlace(name);
  };

  private deletePlaceHandler = () => {
    this.props.deletePlace();
  };

  private selectPlaceHandler = (key: string) => {
    this.props.selectPlace(key);
  };

  private closeModalHandler = () => {
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
  addPlace: (name: string) => void;
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
    addPlace: (name: string) => dispatch(addPlace(name)),
    deletePlace: () => dispatch(deletePlace()),
    selectPlace: (key: string) => dispatch(selectPlace(key)),
    deselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
