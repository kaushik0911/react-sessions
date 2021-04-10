import { ADD_TODO } from './action-type';
import { ADD_IMAGE } from './action-type';

export function addTodo(payload) {
  return { type: ADD_TODO, payload: payload }
}

export function addImage(payload) {
  return { type: ADD_IMAGE, payload: payload }
}



