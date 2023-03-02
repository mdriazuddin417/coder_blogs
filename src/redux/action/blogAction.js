import { GET_CONTENT } from "../actionType/actionType";

export const getBlog = (blogs) => {
  return {
    type: GET_CONTENT,
    payload: blogs,
  };
};
