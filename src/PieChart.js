import React from "react";
import "./PieChart";
import { Doughnut } from "react-chartjs-2";
import { v4 as uuidv4 } from "uuid";
import Chart from "chart.js/auto";
import { DoughnutController } from "chart.js";

// Register the DoughnutController component
Chart.register(DoughnutController);

function DoughnutChart() {
  const data = {
    labels: ["", "", ""],
    datasets: [
      {
        label: "My First Dataset",
        data: [100, 100, 100],
        backgroundColor: [
          "rgb(13, 187, 252)",
          "rgb(10, 38, 64)",
          "rgb(105, 230, 166)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
        aspectRatio: 1,
      },
    },
    cutout: 50,
  };

  const chartId = uuidv4();

  return (
    <div className="pie-container">
      <div
        className="pie-box"
        style={{
          width: "200px",
          height: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Doughnut
          className="pieChart"
          data={data}
          options={options}
          key={chartId}
        />
      </div>
    </div>
  );
}

export default DoughnutChart;
