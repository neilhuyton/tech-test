import { combineReducers } from "redux";
import reports from "./reportReducer";
import visibilitySort from "./visibilitySort";

export default combineReducers({
  reports,
  visibilitySort
});
