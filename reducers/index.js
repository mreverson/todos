import {combineReducers} from 'redux';
import axiosReducer from './axiosReducer';
import counterReducer from './counterReducer';
import loginReducer from './loginReducer';
import signUpReducer from './signUpReducer';

const rootReducer = combineReducers({
  axiosReducer,
  counterReducer,
  loginReducer,
  signUpReducer,
});

export default rootReducer;
