import { ADD_TODO } from '../actions/action-type';

const initialState = {
  todoList: [{ id: 1, title: 'test'}]
}

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todoList: state.todoList.concat(action.payload)
      });
    default:
      return state;
  }
}

export default todoReducer;