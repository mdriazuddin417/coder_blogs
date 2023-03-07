import { combineReducers } from "redux";
import blogReducer from "./blogReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  blogs: blogReducer,
  filter: filterReducer,
});

export default rootReducer;
