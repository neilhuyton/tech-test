import React from "react";

const ReportListRow = ({ report }) => {
  return (
    <tr>
      <td>{report.name}</td>
      <td>{report.type}</td>
      <td>{report.chartType}</td>
      <td>{report.frequency}</td>
      <td>{report.active.toString()}</td>
    </tr>
  );
};

export default ReportListRow;
