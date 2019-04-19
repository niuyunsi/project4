/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

const notice = Platform.select({
  ios: 'Works on iOS',
  android: 'Works on Android'
});

interface IProps {}
interface IState {
  placeName: string;
}
export default class App extends React.Component<IProps, IState> {
  readonly state = {
    placeName: ''
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="An awesome place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <Button title="Add" onPress={() => {}} />
        </View>
      </View>
    );
  }

  private placeNameChangedHandler = (text: string) => {
    this.setState({ placeName: text });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  inputContainer: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  placeInput: {
    // width: '70%',
    flex: 1,
    borderColor: 'black',
    borderWidth: 1
  },
  // placeButton: {
  //   width: '30%'
  // }
});
