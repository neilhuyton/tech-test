import React from "react";

const ReportListRow = ({ report, removeReport }) => {
  return (
    <tr>
      <td>{report.name}</td>
      <td>{report.type}</td>
      <td>{report.chartType}</td>
      <td>{report.frequency}</td>
      <td>{report.active.toString()}</td>
      <td>
        <button onClick={() => removeReport(report)}>Delete</button>
      </td>
    </tr>
  );
};

export default ReportListRow;
