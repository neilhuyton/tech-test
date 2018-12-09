import { combineReducers } from "redux";
import reports from "./reportReducer";
import visibilityFilter from "./visibilityFilter";
import visibilitySort from "./visibilitySort";

export default combineReducers({
  reports,
  visibilityFilter,
  visibilitySort
});
