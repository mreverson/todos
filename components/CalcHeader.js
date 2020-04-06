import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const CalcHeader = props => {
  return (
    <View style={styles.headerContainer}>
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
};
const styles = StyleSheet.create({
  headerContainer: {
    marginTop: '-40%',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIcon: {
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

export default CalcHeader;
