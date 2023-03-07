import { CLEAR, FIRST_UPLOAD, LAST_UPLOAD } from "../actionType/actionType";

const initialState = {
  filter: null,
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

    default:
      return state;
  }
};

export default filterReducer;
