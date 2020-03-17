import React, {Component} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';

class Row extends Component {
  render() {
    const {complete} = this.props;
    return (
      <View style={styles.rowContainer}>
        <Switch value={complete} onValueChange={this.props.onComplete} />
        <View style={styles.textWrap}>
          <Text style={[styles.text, complete && styles.complete]}>
            {this.props.text}
          </Text>
        </View>
        <View style={styles.separator} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rowContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 24,
    color: '#4d4d4d',
  },
  textWrap: {
    flex: 1,
    marginHorizontal: 10,
  },
  separator: {
    borderWidth: 1,
    borderColor: '#f5f5f5',
  },
  complete: {
    textDecorationLine: 'line-through',
  },
});

export default Row;
