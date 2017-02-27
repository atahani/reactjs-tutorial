import { combineReducers } from 'redux';
import app from './app';

const rootReducer = combineReducers({
  app,
  // you can add many reducer
  // user 
});

export default rootReducer;