import React from 'react';
import { Button, StyleSheet, View, TextInput } from 'react-native';

interface IProps {
  onAddPlace: (name: string) => void;
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
          onChangeText={this.changeTextHandler}
        />
        <View style={styles.placeButton}>
          <Button title="Add" onPress={this.submitPlaceHandler} />
        </View>
      </View>
    );
  }

  private changeTextHandler = (text: string) => {
    this.setState({ name: text });
  };

  private submitPlaceHandler = () => {
    if (this.state.name.trim() === '') {
      return;
    }
    this.props.onAddPlace(this.state.name);
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
