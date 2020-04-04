import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const CalcInput = props => {
  const [enteredCalc, setEnteredCalc] = useState('');

  const inputHandler = enteredCalc => {
    setEnteredCalc(enteredCalc);
  };

  const addInputHandler = () => {
    props.onAddCalc(enteredCalc);
    setEnteredCalc('');
  };
  return (
    <Modal visible={props.visible} animationType={'slide'}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholderTextColor={'#666'}
          placeholder={'Add Calculation'}
          onChangeText={inputHandler}
          value={enteredCalc}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.cancelButton}>
            <Button title={'Cancel'} color={'#fff'} onPress={props.onCancel} />
          </View>
          <View style={styles.addButton}>
            <Button color={'#fff'} title={'Add'} onPress={addInputHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#1B1B1B',
  },
  text: {
    color: '#fff',
  },
  input: {
    color: '#fff',
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#fff',
  },
  buttonContainer: {
    margin: 20,
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  addButton: {
    width: '45%',
    backgroundColor: '#92BF5A',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#92BF5A',
  },
  cancelButton: {
    width: '45%',
    backgroundColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'red',
  },
});

export default CalcInput;
