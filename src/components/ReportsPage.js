import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReportList from "./ReportList";
import * as types from "../actions/actionTypes";
import * as reportActions from "../actions/reportActions";

const filterReports = (reports, filter) => {
  //   return reports.filter(t => t.filterTypes.includes(filter));
  return reports.filter(t => t.type === filter);
};

const sortReports = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

const getReports = (reports, filter, sort) => {
  switch (filter) {
    case types.SHOW_ALL:
      reports = reports.sort(sortReports);
      return sort === types.SORT_DESC ? [...reports].reverse() : reports;
    case types.SHOW_GENDER:
      reports = filterReports(reports, "Gender").sort(sortReports);
      return sort === types.SORT_DESC ? [...reports].reverse() : reports;
    case types.SHOW_AGE_RANGE:
      reports = filterReports(reports, "Age range").sort(sortReports);
      return sort === types.SORT_DESC ? [...reports].reverse() : reports;
    case types.SHOW_VISITORS:
      reports = filterReports(reports, "Visitors").sort(sortReports);
      return sort === types.SORT_DESC ? [...reports].reverse() : reports;
    // case types.SHOW_LOCATION:
    //   reports = filterReports(reports, "Location").sort(sortReports);
    //   return sort === types.SORT_DESC ? [...reports].reverse() : reports;
    // case types.SHOW_DEVICE_TYPE:
    //   reports = filterReports(reports, "Device type").sort(sortReports);
    //   return sort === types.SORT_DESC ? [...reports].reverse() : reports;
    // case types.SHOW_OPERATING_SYSTEM:
    //   reports = filterReports(reports, "Operating system").sort(sortReports);
    //   return sort === types.SORT_DESC ? [...reports].reverse() : reports;
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

class ReportsPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadReports();
  }

  render() {
    const reports = this.props.reports;
    const removeReport = this.props.actions.removeReport;
    return (
      <>
        <h1>Reports</h1>
        <ReportList reports={reports} removeReport={removeReport} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  reports: getReports(
    state.reports,
    state.visibilityFilter,
    state.visibilitySort
  )
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(reportActions, dispatch, ownProps)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportsPage);
