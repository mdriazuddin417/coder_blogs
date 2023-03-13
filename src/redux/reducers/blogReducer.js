import {
  ADD_CONTENT,
  ADD_WISHLIST,
  DELETE_CONTENT,
  DELETE_WISHLIST,
  GET_CONTENT,
  HISTORY_CONTENT,
  UPDATE_CONTENT,
  WISHLIST_CONTENT,
} from "../actionType/actionType";

const initialState = {
  blogs: [],
  history: [],
};

const blogReducer = (state = initialState, action) => {
  const selectedBlog = state.history.find(
    (blog) => blog._id === action.payload._id,
  );
  const selectedWishList = state?.blogs.find(
    (blog) => blog._id === action.payload._id,
  );
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
      if (selectedWishList) {
        const newWishList = state.blogs.filter(
          (blog) => blog._id !== action.payload._id,
        );
        selectedWishList.status = !selectedWishList.status;
        return {
          ...state,
          blogs: [...newWishList, selectedWishList],
        };
      }
      return { ...state };
    case UPDATE_CONTENT:
      return {
        ...state,
        blogs: [...state.blogs],
      };
    case HISTORY_CONTENT:
      if (selectedBlog) {
        const newHistory = state.history.filter(
          (blog) => blog._id !== action.payload._id,
        );
        selectedBlog.watchDate = new Date().toUTCString();
        return {
          ...state,
          history: [...newHistory, selectedBlog],
        };
      }

      return {
        ...state,
        history: [...state.history, action.payload],
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
