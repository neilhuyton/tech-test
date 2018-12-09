import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReportList from "./ReportList";
import * as reportActions from "../actions/reportActions";

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
  reports: state.reports.data
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(reportActions, dispatch, ownProps)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportsPage);
