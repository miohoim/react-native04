/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
{/* import MyButton from './src/MyButton';*/}
{/* import FadeInView from './src/FadeInView'; */}
{/*import AnimationTest from './src/AnimationTest'; */}
import InputText from './src/InputText';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  LayoutAnimation
} from 'react-native';

export default class todoSample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>wwwww</Text>
        {/*<MyButton />
        <FadeInView style={{width: 250,height: 50, backgroundColor: 'powderblue'}}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10 }}> Fading in </Text>
        </FadeInView> 
        <AnimationTest />
        <InputText />
        */}
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

AppRegistry.registerComponent('todoSample', () => todoSample);
