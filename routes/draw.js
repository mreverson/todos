import {createDrawerNavigator} from '@react-navigation/drawer';
import {createAppContainer} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';

import login from '../components/views/Login';
import signup from '../components/views/SignUp';
import axios from '../components/views/Axios';
import counter from '../components/views/Counter';

const Drawer = createDrawerNavigator();
function LoginScreen(){
    return(login);
}
function SignUpScreen(){
    return(signup);
}
function AxiosScreen(){
    return(axios);
}
function CounterScreen(){
    return(counter);
}
function RootDrawerNavigator(){
    return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Login">
            <Drawer.Screen name="Login" component={LoginScreen} />
            <Drawer.Screen name="SignUp" component={SignUpScreen} />
            <Drawer.Screen name="Axios" component={AxiosScreen} />
            <Drawer.Screen name="Counter" component={CounterScreen} />
        </Drawer.Navigator>
    </NavigationContainer>    
    );
}

export default createAppContainer(RootDrawerNavigator);