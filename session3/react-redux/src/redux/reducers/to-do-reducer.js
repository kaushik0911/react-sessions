import { ADD_TODO } from '../actions/action-type';

const initialState = {
  todoList: [{ id: 1, title: 'test1'}, { id: 2, title: 'test2'}]
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