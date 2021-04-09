import { ADD_TODO } from './action-type';

export function addTodo(payload) {
  return { type: ADD_TODO, payload: payload }
}


