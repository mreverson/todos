import React, {useState} from 'react';
import {View, StyleSheet, Platform, Text} from 'react-native';

const Login = props => {
  return (
    <View style={styles.contentWrapper}>
      <Text style={styles.text}>LOGIN PAGE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
  },
});

export default Login;
