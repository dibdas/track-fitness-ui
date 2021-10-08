import { combineReducers } from 'redux';
import exerciseReducer from './exercise';
import measurementReducer from './measurement';

const rootReducer = combineReducers({ exerciseReducer, measurementReducer });
export default rootReducer;
