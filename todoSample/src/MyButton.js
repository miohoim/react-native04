import React, { Component } from 'react';

import {
	StyleSheet,
	ScrollView,
	View,
	Text,
	TouchableHighlight
} from 'react-native';

export default class MyButton extends Component {
	_onPressButton(){
		console.log("You tapped the button!");
	}
	render() {
		return (
			<TouchableHighlight onPress={this._onPressButton}>
				<Text style={styles.base}>Button</Text>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
	base: {
		margin: 10,
	    height: 40,
	    padding: 10,
	    borderColor: 'red',
	    borderWidth: 3,
	}
});

