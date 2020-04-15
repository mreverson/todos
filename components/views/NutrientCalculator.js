import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import CalcHeader from '../CalcHeader';
import CalcFooter from '../CalcFooter';
import CalcItem from '../CalcItem';
import CalcInput from '../CalcInput';

class NutrientCalculator extends Component {

  constructor(props) {
    super(props);
  }

  state ={
    calculations: [],
    setCalculations: [],
    isAddMode: false,
  }

  addCalcHandler(calcTitle){
    setCalculations(currentCalcs => [
      ...currentCalcs,
      {key: Date.now().toString(), value: calcTitle},
    ]);
    setIsAddMode(false);
  };

  removeCalcHandler(calcId){
    setCalculations(currentCalcs => {
      return currentCalcs.filter(calc => calc.key !== calcId);
    });
  };

  cancelCalcAddHandler(){
    setIsAddMode(false);
  };

  render(){

    const modalState = () => setIsAddMode(true);

    return (
      <View style={styles.content}>
        <CalcHeader />
        <CalcInput
          visible={this.state.isAddMode}
          onAddCalc={this.addCalcHandler.bind(this)}
          onCancel={this.cancelCalcAddHandler.bind(this)}
        />
        <View style={styles.listWrapper}>
          <FlatList
            data={this.state.calculations}
            renderItem={itemData => (
              <CalcItem
                id={itemData.item.key}
                onDelete={this.removeCalcHandler.bind(this)}
                title={itemData.item.value}
              />
            )}
          />
        </View>
        <CalcFooter modalState={modalState} />
      </View>
    );
  }

};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  listWrapper: {
    margin: 10,
    flex: 1,
  },
});

export default NutrientCalculator;
