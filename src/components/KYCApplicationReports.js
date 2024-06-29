import React from "react";
import PieChart from "./PieChart";

const KYCApplicationReports = () => {
  const data = [
    { status: "Approved", count: 11 },
    { status: "Rejected", count: 1 },
    { status: "Cancelled", count: 1 },
    { status: "Ready For Review", count: 10 },
    { status: "In Progress", count: 54 },
  ];

  return (
    <div>
      <h2>KYC Application Reports</h2>
      <PieChart data={data} />
    </div>
  );
};

export default KYCApplicationReports;
