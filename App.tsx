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

import placeImage from './src/assets/a-great-wall-moves-across-the-mountains.jpg';

export interface Place {
  key: string;
  name: string;
  image?: ImageSourcePropType;
}

interface IProps {}
interface IState {
  places: Place[];
}
export default class App extends React.Component<IProps, IState> {
  readonly state = { places: [] };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          onPlaceDeleted={this.placeDeletedHandler}
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
          { key: Math.random().toString(), name, image: placeImage }
        ]
      };
    });
  };

  private placeDeletedHandler = (key: string) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      };
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
