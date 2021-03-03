import { combineReducers } from 'redux';

 import nameReducer  from './reducers/nameReducers';
 import dropdownReducer  from './reducers/dropdownReducer';
 import ProfessionalProfileReducer  from './reducers/ProfessionalProfileReducer';
// import colorReducer from 'reducers/colorReducer';
// 

export const rootReducer = combineReducers({
     nameReducer: nameReducer,
     dropdownReducer:dropdownReducer,
     ProfessionalProfileReducer:ProfessionalProfileReducer,
     
    
  });