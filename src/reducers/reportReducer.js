import * as types from "../actions/actionTypes";

export default function reportReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_REPORTS_SUCCESS:
      return action.reports;

    case types.DELETE_REPORT_SUCCESS:
      return state.filter(({ name }) => name !== action.report.name);

    default:
      return state;
  }
}
