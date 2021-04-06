import { ADD_TODO } from './action-type';

function addTodo(payload) {
  return { type: ADD_TODO, payload: payload }
}
