import {
  CLEAR,
  FIRST_UPLOAD,
  LAST_UPLOAD,
  TAG_CONTENT,
} from "../actionType/actionType";

export const firstAction = (value) => {
  return {
    type: FIRST_UPLOAD,
    payload: value,
  };
};
export const lastAction = (value) => {
  return {
    type: LAST_UPLOAD,
    payload: value,
  };
};
export const clearAction = () => {
  return {
    type: CLEAR,
  };
};

export const addTag = (tag) => {
  return {
    type: TAG_CONTENT,
    payload: tag,
  };
};
