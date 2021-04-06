import { ADD_TODO } from '../actions/action-type';

const initialState = {
  todoList: [{ id: 1, title: 'test'}]
}

function todoReducer(state = initialState, action) {
  switch (action) {
    case ADD_TODO:
      Object.assign({}, state, {
        todoList: state.todoList.concat(action.payload)
      });
      break;
  }
}

export default todoReducer;