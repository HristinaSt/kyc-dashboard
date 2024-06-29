import React from "react";
import Header from "../Header/Header";
import KYCApplicationReports from "../KYCAApplicationReports/KYCApplicationReports";
import "./Dashboard.scss";

const Dashboard = () => {
  const headerStyle = {
    padding: "10px",
    textAlign: "left",
    background: "none",
    margin: "10px 0",
  };

  const titleStyle = {
    margin: 0,
    fontSize: "24px",
    fontWeight: "bold",
  };

  return (
    <div className="dashboard-wrapper">
      <Header
        title="Dashboard"
        headerStyle={headerStyle}
        titleStyle={titleStyle}
      />
      <KYCApplicationReports />
    </div>
  );
};

export default Dashboard;
