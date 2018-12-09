import * as types from "../actions/actionTypes";

export default function reportReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_REPORTS_SUCCESS:
      return action.reports;

    default:
      return state;
  }
}
