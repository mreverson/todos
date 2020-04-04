import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const Footer = props => {
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    marginRight: 20,
  },
  copy: {
    color: '#92BF5A',
    textTransform: 'uppercase',
    fontSize: 24,
    fontWeight: '800',
    marginRight: 15,
  },
});

export default Footer;
