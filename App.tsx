/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { ImageSourcePropType, SafeAreaView, StyleSheet } from 'react-native';

import PlaceList from './src/components/PlaceList';
import PlaceInput from './src/components/PlaceInput';
import PlaceDetail from './src/components/PlaceDetail';

import placeImage from './src/assets/a-great-wall-moves-across-the-mountains.jpg';

export interface Place {
  key: string;
  name: string;
  image: ImageSourcePropType;
}

interface IProps {}
interface IState {
  places: Place[];
  selectedPlace?: Place;
}
export default class App extends React.Component<IProps, IState> {
  readonly state: IState = { places: [], selectedPlace: undefined };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <PlaceDetail
          onPlaceDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
          selectedPlace={this.state.selectedPlace}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          onPlaceSelected={this.placeSelectedHandler}
          places={this.state.places}
        />
      </SafeAreaView>
    );
  }

  private placeAddedHandler = (name: string) => {
    this.setState(prevState => {
      return {
        places: [
          ...prevState.places,
          {
            key: Math.random().toString(),
            name,
            // image: placeImage
            image: {
              uri:
                'https://images.unsplash.com/photo-1505763941729-634dfa346b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
            }
          }
        ]
      };
    });
  };

  private placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return (
            place.key !==
            (prevState.selectedPlace ? prevState.selectedPlace.key : undefined)
          );
        }),
        selectedPlace: undefined
      };
    });
  };

  private placeSelectedHandler = (key: string) => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find((place: Place) => {
          return place.key === key;
        })
      };
    });
  };

  private modalClosedHandler = () => {
    this.setState({
      selectedPlace: undefined
    });
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
