import React from "react";
import PieChart from "../PieChart/PieChart";
import data from "../../assets/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import CustomIcon from "../../assets/CustomIcon";
import "./KYCApplicationReports.scss";
import Header from "../Header/Header";

const KYCApplicationReports = () => {
  const chartData = data.chartData;
  const tableData = data.tableData;
  const headerStyle = {
    padding: "10px",
    textAlign: "left",
    background: "none",
  };

  const titleStyle = {
    margin: 0,
    fontSize: "24px",
    fontWeight: "bold",
  };
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <Header
          title="KYC Application Reports"
          headerStyle={headerStyle}
          titleStyle={titleStyle}
        />
        <div className="chart-container">
          <PieChart data={chartData} />
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Created</th>
                <th>Name</th>
                <th>Type</th>
                <th>Risk Score</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => {
                const [datePart, timePart] = row.created.split(", ");
                const dateTime = `${datePart}, ${timePart.split(" ")[0]}`;
                const hours = timePart.split(" ")[1];

                return (
                  <tr key={index}>
                    <td className="created">
                      {dateTime}
                      <br />
                      <span className="hours">{hours}</span>
                    </td>
                    <td>
                      {row.name}
                      <br />
                      <span className="email">{row.email}</span>
                    </td>
                    <td>{row.type}</td>
                    <td
                      className={
                        row.riskScore === "LOW"
                          ? "risk-low"
                          : "risk-not-calculated"
                      }
                    >
                      {row.riskScore === "LOW" && (
                        <FontAwesomeIcon icon={faCheck} className="risk-icon" />
                      )}
                      <span className="risk-text">{row.riskScore}</span>
                    </td>
                    <td
                      className={
                        row.status === "Approved"
                          ? "status-approved"
                          : row.status === "Customer Processing"
                          ? "status-processing"
                          : row.status === "User Accepted KYC Invitation"
                          ? "status-invited"
                          : ""
                      }
                    >
                      {row.status === "Approved" && (
                        <>
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="status-icon"
                          />
                          {row.status}
                        </>
                      )}
                      {row.status === "Customer Processing" && (
                        <>
                          <span className="status-icon">• • •</span>
                          {row.status}
                        </>
                      )}
                      {row.status === "User Accepted KYC Invitation" && (
                        <>
                          <span className="status-icon">• • •</span>
                          {row.status}
                        </>
                      )}
                      {row.status !== "Approved" &&
                        row.status !== "Customer Processing" &&
                        row.status !== "User Accepted KYC Invitation" &&
                        row.status}
                    </td>
                    <td>
                      <CustomIcon className="details" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default KYCApplicationReports;
