import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Platform,
  FlatList,
} from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import CalcItem from './components/CalcItem';
import CalcInput from './components/CalcInput';

export default function App() {
  const [calculations, setCalculations] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const modalState = () => setIsAddMode(true);

  const addCalcHandler = calcTitle => {
    setCalculations(currentCalcs => [
      ...currentCalcs,
      {key: Date.now().toString(), value: calcTitle},
    ]);
    setIsAddMode(false);
  };

  const removeCalcHandler = calcId => {
    setCalculations(currentCalcs => {
      return currentCalcs.filter(calc => calc.key !== calcId);
    });
  };

  const cancelCalcAddHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.container}>
      <Header />
      <CalcInput
        visible={isAddMode}
        onAddCalc={addCalcHandler}
        onCancel={cancelCalcAddHandler}
      />
      <FlatList
        data={calculations}
        renderItem={itemData => (
          <CalcItem
            id={itemData.item.key}
            onDelete={removeCalcHandler}
            title={itemData.item.value}
          />
        )}
      />
      <Footer modalState={modalState} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1B',
    ...Platform.select({
      ios: {paddingTop: 30},
    }),
  },
  content: {
    flex: 1,
  },
  
});
