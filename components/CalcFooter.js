import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const CalcFooter = props => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.copy}>New Calculation</Text>
      <TouchableOpacity onPress={() => props.modalState(true)}>
        <Image source={require('../images/addButtonPlaceholder.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 0.3,
    paddingRight: 15,
  },
  copy: {
    color: '#92BF5A',
    textTransform: 'uppercase',
    fontSize: 24,
    fontWeight: '800',
    marginRight: 15,
  },
});

export default CalcFooter;
