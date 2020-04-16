import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.menuIcon}>
          <Image source={require('../images/menuIconPlaceholder.png')} />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#262626',
    marginTop: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    flexDirection: 'row',
  },
  title: {
    justifyContent: 'center',
    marginTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
    color: '#fff',
    fontSize: 30,
  },
  menuIcon: {
    padding: 20,
  },
});

export default Header;
