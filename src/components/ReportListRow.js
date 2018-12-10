import React from "react";

const ReportListRow = ({ report, removeReport }) => (
  <tr className="report">
    <td>{report.name}</td>
    <td>{report.type}</td>
    <td>{report.chartType}</td>
    <td>{report.frequency}</td>
    <td>{report.active.toString()}</td>
    <td>
      <button
        className="report-delete"
        onClick={() => {
          removeReport(report);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default ReportListRow;
