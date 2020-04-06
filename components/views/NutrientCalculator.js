import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import CalcHeader from '../CalcHeader';
import CalcFooter from '../CalcFooter';
import CalcItem from '../CalcItem';
import CalcInput from '../CalcInput';

const NutrientCalculator = props => {
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
    <View style={styles.content}>
      <CalcHeader />
      <CalcInput
        visible={isAddMode}
        onAddCalc={addCalcHandler}
        onCancel={cancelCalcAddHandler}
      />
      <View style={styles.listWrapper}>
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
      </View>
      <CalcFooter modalState={modalState} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  listWrapper: {
    margin:10,
    flex: 1,
  },
});

export default NutrientCalculator;
