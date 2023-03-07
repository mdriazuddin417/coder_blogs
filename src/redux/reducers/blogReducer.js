import {
  ADD_CONTENT,
  DELETE_CONTENT,
  GET_CONTENT,
  UPDATE_CONTENT,
  WISHLIST_CONTENT,
} from "../actionType/actionType";

const initialState = {
  blogs: [],
  history: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTENT:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case GET_CONTENT:
      return {
        ...state,
        blogs: action.payload,
      };
    case WISHLIST_CONTENT:
      return {
        ...state,
        blogs: [...state.blogs, { ...action.payload, status: true }],
      };
    case UPDATE_CONTENT:
      return {
        ...state,
        blogs: [...state.blogs],
      };
    case DELETE_CONTENT:
      return {
        ...state,
        blogs: [...state.blogs.filter((blog) => blog._id !== action.payload)],
      };
    default:
      return state;
  }
};

export default blogReducer;
