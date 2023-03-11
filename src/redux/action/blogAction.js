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

export const getBlog = (blogs) => {
  return {
    type: GET_CONTENT,
    payload: blogs,
  };
};
export const postBlog = (blog) => {
  return {
    type: ADD_CONTENT,
    payload: blog,
  };
};
export const updateBlog = () => {
  return {
    type: UPDATE_CONTENT,
  };
};
export const deleteBlog = (id) => {
  return {
    type: DELETE_CONTENT,
    payload: id,
  };
};

export const addWishList = (blog) => {
  return {
    type: WISHLIST_CONTENT,
    payload: blog,
  };
};

export const historyBlog = (blog) => {
  return {
    type: HISTORY_CONTENT,
    payload: blog,
  };
};
