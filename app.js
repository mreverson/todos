import React, {useState} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import NutrientCalculator from './components/views/NutrientCalculator';
import Login from './components/views/Login';
import Menu from './components/Menu';
import Header from './components/Header';

export default function App() {
  const [isMenuMode, setMenuMode] = useState(false);
  var login = <Login />;
  var home = <NutrientCalculator />;

  const menuState = () => setMenuMode(true);

  const menuCloseHandler = () => {
    setMenuMode(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header menuState={menuState} />
        <Menu visible={isMenuMode} menuClose={menuCloseHandler} />
      </View>
      <View style={styles.content}>{home}</View>
    </View>
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
