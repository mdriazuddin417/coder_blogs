import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import historyAddDate from "./middleware/historyAddDate";
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(historyAddDate, thunk)),
);

export default store;
