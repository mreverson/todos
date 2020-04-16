import React, {Component} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './store';
import Axios from './components/views/Axios';
import Counter from './components/views/Counter';

const store = configureStore();
class App extends Component {
  componentDidMount() {
    console.log(store.getState());
  }
  render() {
    var axios = <Axios />;
    var counter = <Counter />;
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <View style={styles.content}>{axios}</View>
        </View>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flex: 1,
    backgroundColor: '#1B1B1B',
    ...Platform.select({
      ios: {paddingTop: 30},
    }),
  },
  content: {
    flex: 9,
  },
});
export default App;
