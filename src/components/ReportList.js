import React from "react";
import ReportListRow from "./ReportListRow";

const ReportList = ({ reports, removeReport }) => (
  <table className="table" border="1">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Chart Type</th>
        <th>Frequency</th>
        <th>Active</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {reports.map(report => (
        <ReportListRow
          key={report.name}
          report={report}
          removeReport={removeReport}
        />
      ))}
    </tbody>
  </table>
);

export default ReportList;
