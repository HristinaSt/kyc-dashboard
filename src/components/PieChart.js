import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.status),
    datasets: [
      {
        label: "# of Votes",
        data: data.map((item) => item.count),
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default PieChart;
