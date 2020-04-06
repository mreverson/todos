import React, {useState} from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';

const Menu = props => {
  return (
    <Modal visible={props.visible} animationType={'slide'}>
      <View style={styles.container}>
        <TouchableOpacity onPress={props.menuClose}>
          <Text style={styles.close}>X</Text>
        </TouchableOpacity>
        <View style={styles.menuContainer}>
          <TouchableOpacity>
            <Text style={styles.text}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flex: 1,
    backgroundColor: '#1B1B1B',
  },
  menuContainer: {
    flexDirection: 'column',
    //justifyContent: 'space-around',
    //alignItems: 'stretch',
    marginTop: 50,
    marginRight: 30,
  },
  close: {
    marginTop: 50,
    marginLeft: 15,
    fontSize: 40,
    fontWeight: '900',
    color: '#fff',
  },
  text: {
    margin: 15,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Menu;
