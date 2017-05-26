import React, { Component } from 'react';

import {
	StyleSheet,
	ScrollView,
	View,
	Text,
  TextInput,
  TouchableHighlight
} from 'react-native';

export default class InputText extends Component {
  constructor(props){
    super(props);
    this.clearText = this.clearText.bind(this);
  }
  clearText(){
    this.formText.setNativeProps({text: ''});
  }

	render(){
		return(
      <View>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          please input text.
        </Text>
        <TextInput
            style={styles.textform}
            ref={component => this.formText = component}
        />
        <TouchableHighlight onPress={this.clearText}>
          <Text style={styles.button}>
            文字を消す
          </Text>
        </TouchableHighlight>
      </View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
  },
  instructions: {
    marginBottom: 5,
  },
  textform: {
    margin: 20,
    padding: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 3,
    backgroundColor: 'white',
  },
  button: {
    marginTop :10,
    height: 40,
    padding: 10,
    borderColor: 'red',
    borderWidth: 3,
  },
  box: {
    backgroundColor: 'black'
  }
});