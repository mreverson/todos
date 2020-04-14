import {combineReducers} from 'redux';
import axiosReducer from './axiosReducer';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  axiosReducer,
  counterReducer,
});

export default rootReducer;
