import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReportList from "./ReportList";
import * as types from "../actions/actionTypes";
import * as reportActions from "../actions/reportActions";

const sortReports = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

const getReports = (reports, sort) => {
  reports = reports.sort(sortReports);
  return sort === types.SORT_DESC ? [...reports].reverse() : reports;
};

class ReportsPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadReports();
  }

  render() {
    const reports = this.props.reports;
    return (
      <>
        <h1>Reports</h1>
        <ReportList reports={reports} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  reports: getReports(state.reports, state.visibilitySort)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(reportActions, dispatch, ownProps)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportsPage);
