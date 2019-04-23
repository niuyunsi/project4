import React from 'react';
import { Button, StyleSheet, View, TextInput } from 'react-native';

interface IProps {
  onPlaceAdded: (name: string) => void;
}
interface IState {
  name: string;
}

class PlaceInput extends React.Component<IProps, IState> {
  readonly state: IState = {
    name: ''
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="An awesome place"
          value={this.state.name}
          onChangeText={this.placeNameChangedHandler}
        />
        <View style={styles.placeButton}>
          <Button title="Add" onPress={this.placeSubmitHandler} />
        </View>
      </View>
    );
  }

  private placeNameChangedHandler = (text: string) => {
    this.setState({ name: text });
  };

  private placeSubmitHandler = () => {
    if (this.state.name.trim() === '') {
      return;
    }
    this.props.onPlaceAdded(this.state.name);
    // this.setState({ name: '' });
  };
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%',
    flex: 1
  },
  placeButton: {
    width: '30%'
  }
});

export default PlaceInput;
