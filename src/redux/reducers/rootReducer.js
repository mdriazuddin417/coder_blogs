import { combineReducers } from "redux";
import blogReducer from "./blogReducer";

const rootReducer = combineReducers({ blogs: blogReducer });

export default rootReducer;
