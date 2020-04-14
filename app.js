import React, {useState} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './store';
import NutrientCalculator from './components/views/NutrientCalculator';
import Axios from './components/Axios';
import Menu from './components/Menu';
import Header from './components/Header';
import Counter from './components/Counter';

export default function App() {
  const store = configureStore();
  const [isMenuMode, setMenuMode] = useState(false);
  var axios = <Axios />;
  var home = <NutrientCalculator />;
  var counter = <Counter />;

  const menuState = () => setMenuMode(true);

  const menuCloseHandler = () => {
    setMenuMode(false);
  };

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Header menuState={menuState} />
          <Menu visible={isMenuMode} menuClose={menuCloseHandler} />
        </View>
        <View style={styles.content}>{axios}</View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    //justifyContent: 'space-around',
    flex: 1,
    backgroundColor: '#1B1B1B',
    ...Platform.select({
      ios: {paddingTop: 30},
    }),
  },
  header: {
    flex: 3,
  },
  content: {
    flex: 10,
  },
  listWrapper: {
    flex: 1,
  },
});
