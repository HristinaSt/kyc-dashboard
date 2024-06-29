import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale
);

const PieChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.status),
    datasets: [
      {
        label: "Applications",
        data: data.map((item) => item.count),
        backgroundColor: [
          "#90ED7D",
          "#FFA05B",
          "#FF5B5B",
          "#FFE162",
          "#5E98E5",
        ],
      },
    ],
  };

  return (
    <div className="pie-chart">
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
