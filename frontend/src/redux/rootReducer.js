import { combineReducers } from 'redux';

 import nameReducer  from './reducers/nameReducers';
// import colorReducer from 'reducers/colorReducer';
// 

export const rootReducer = combineReducers({
     nameReducer: nameReducer,
    
  });