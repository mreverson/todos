import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CalcItem = props => {
  return (
    <TouchableOpacity
      onPress={props.onDelete.bind(this, props.id)}
      style={styles.textContainer}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    padding: 5,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#fff',
  },
  text: {
    color: '#fff',
  },
});

export default CalcItem;
