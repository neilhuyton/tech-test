import * as types from "./actionTypes";
import reportApi from "../api/ReportsApi";

export const loadReportsSuccess = reports => ({
  type: types.LOAD_REPORTS_SUCCESS,
  reports
});

export const sortReports = sortType => ({
  type: types.SET_VISIBILITY_SORT,
  sortType
});

export const loadReports = () => dispatch => {
  return reportApi
    .getAllReports()
    .then(reports => {
      dispatch(loadReportsSuccess(reports));
    })
    .catch(error => {
      throw error;
    });
};
