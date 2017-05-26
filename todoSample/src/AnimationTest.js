import React, { Component } from 'react';

import {
	StyleSheet,
	ScrollView,
	View,
	Text,
	TouchableOpacity,
	LayoutAnimation
} from 'react-native';

export default class AnimationTest extends Component {
	constructor(props){
		super(props);
		this.state = { w: 100, h:100 };
		this._onPress = this._onPress.bind(this);
	}

	componentWillMount(){
		LayoutAnimation.spring();
	}

	_onPress(){
		LayoutAnimation.spring();
		this.setState({ w: this.state.w + 15 , h: this.state.h +15 })
	}

	render(){
		return(
			<View style={styles.container}>
				<View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
				<TouchableOpacity onPress={this._onPress}>
					<View style={styles.button}>
						<Text style={styles.buttonText}>Press me!</Text>
					</View>
				</TouchableOpacity>
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