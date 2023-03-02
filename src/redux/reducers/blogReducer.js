import {
  ADD_CONTENT,
  DELETE_CONTENT,
  GET_CONTENT,
  UPDATE_CONTENT,
} from "../actionType/actionType";

const initialState = {
  blogs: [],
  wishList: [],
  history: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_CONTENT:
    //   return {
    //     ...state,
    //     blogs: action.payload,
    //   };
    case GET_CONTENT:
      return {
        ...state,
        blogs: [action.payload],
      };
    // case UPDATE_CONTENT:
    //   return {
    //     ...state,
    //     filters: action.payload,
    //   };
    // case DELETE_CONTENT:
    //   return {
    //     ...state,
    //     filters: action.payload,
    //   };
    default:
      return state;
  }
};

export default blogReducer;
