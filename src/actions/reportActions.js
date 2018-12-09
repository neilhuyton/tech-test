import * as types from "./actionTypes";
import reportApi from "../api/ReportsApi";

export const loadReportsSuccess = reports => ({
  type: types.LOAD_REPORTS_SUCCESS,
  reports
});

export const deleteReportSuccess = report => ({
  type: types.DELETE_REPORT_SUCCESS,
  report
});

export const setVisibilityFilter = filter => ({
  type: types.SET_VISIBILITY_FILTER,
  filter
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

export const removeReport = report => dispatch => {
  return reportApi
    .deleteReport(report)
    .then(() => {
      dispatch(deleteReportSuccess(report));
      return;
    })
    .catch(error => {
      throw error;
    });
};
