import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const Header = props => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.menuIcon}
        onPress={() => props.menuState(true)}>
        <Image source={require('../images/menuIconPlaceholder.png')} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#262626',
    flex: 1,
    marginTop: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  menuIcon: {
    padding: 20,
  },
});

export default Header;
