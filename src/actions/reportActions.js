import * as types from "./actionTypes";
import reportApi from "../api/ReportsApi";

export function loadReportsSuccess(reports) {
  return { type: types.LOAD_REPORTS_SUCCESS, reports };
}

export function loadReports() {
  return function(dispatch) {
    return reportApi
      .getAllReports()
      .then(reports => {
        dispatch(loadReportsSuccess(reports));
      })
      .catch(error => {
        throw error;
      });
  };
}
