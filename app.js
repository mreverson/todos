import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import login from './components/views/Login';
import signup from './components/views/SignUp';
import axios from './components/views/Axios';
import counter from './components/views/Counter';
import configureStore from './store';

const Drawer = createDrawerNavigator();

export default function App() {
  const store = configureStore();
  console.log(store.getState())
  return(
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Login">
            <Drawer.Screen name="Login" component={login}/>
            <Drawer.Screen name="SignUp" component={signup} />
            <Drawer.Screen name="Axios" component={axios} />
            <Drawer.Screen name="Counter" component={counter} />
        </Drawer.Navigator>
      </NavigationContainer>    
    </Provider>
  )
}

