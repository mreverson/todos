import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Row extends Component {
  render() {
    return (
        <View>
            <Text>{this.props.text}</Text>
        </View>
    );
  }
}

export default Row;
