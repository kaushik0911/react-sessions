import { ADD_IMAGE } from "../actions/action-type";

const initialState = {
  imageList: [
    { imageURL: "https://picsum.photos/200" },
    { imageURL: "https://picsum.photos/200" },
    { imageURL: "https://picsum.photos/200" },
    { imageURL: "https://picsum.photos/200" }
  ]
};

function imageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_IMAGE:
      return Object.assign({}, state, {
        todoList: state.imageList.concat(action.payload)
      });
    default:
      return state;
  }
}

export default imageReducer;
