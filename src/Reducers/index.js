import { combineReducers } from "redux";
import apiReducer from "./apiReducer";

const allReducers = combineReducers({
  apiReducer,
});

export default allReducers;
