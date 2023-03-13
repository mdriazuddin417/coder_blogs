import {
  CLEAR,
  FIRST_UPLOAD,
  LAST_UPLOAD,
  TAG_CONTENT,
} from "../actionType/actionType";

const initialState = {
  filter: null,
  tag: null,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIRST_UPLOAD:
      return {
        ...state,
        filter: action.payload,
      };
    case LAST_UPLOAD:
      return {
        ...state,
        filter: action.payload,
      };
    case CLEAR:
      return {
        ...state,
        filter: null,
      };
    case TAG_CONTENT:
      return {
        ...state,
        tag: action.payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
