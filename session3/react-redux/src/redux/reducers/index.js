import imageReducer from "./image-reducer";
import todoReducer from './to-do-reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  imageReducer,
  todoReducer
});