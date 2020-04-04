import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

class Header extends Component {
  state = {};
  render() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.menuIcon}>
          <Image source={require('../images/menuIconPlaceholder.png')} />
        </TouchableOpacity>
        <View styles={styles.header}>
          <Image
            style={styles.headerIcon}
            source={require('../images/headerIconPlaceholder.png')}
          />
          <View>
            <Text style={styles.title}>Nutrient Calculator</Text>
          </View>
          <View>
            <Text style={styles.subtitle}>Your saved calculations</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#262626',
    height: '25%',
    marginTop: 20,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  menuIcon: {
    padding: 20,
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIcon: {
    marginTop: -30,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    color: '#FFF',
    fontSize: 28,
    marginBottom: 10,
    fontWeight: '800',
    textAlign: 'center',
  },
  subtitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default Header;
