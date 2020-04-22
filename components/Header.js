import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import { globalStyles } from '../styles/global';

class Header extends Component {
  render() {
    const {navigation} = this.props;

    function toggleMenu(){
     navigation.toggleDrawer()
    }
    return (
      <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.menuIcon} onPress={() => this.props.nav.toggleDrawer()}>
            <Image source={require('../images/menuIconPlaceholder.png')} />
          </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerContainer: {
    flex:1,
    backgroundColor: '#262626',
    flexDirection: 'row',
    alignItems:'center',
  },
  title: {
    justifyContent: 'center',

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
