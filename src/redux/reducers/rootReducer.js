import { combineReducers } from "redux";
import blogReducer from "./blogReducer";
import filterReducer from "./filterReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  blogs: blogReducer,
  filter: filterReducer,
  user: userReducer,
});

export default rootReducer;
