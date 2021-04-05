import { createStore } from 'redux';
import todoReducer from './reducers/to-do-reducer'

const store = createStore(todoReducer);

export default store;