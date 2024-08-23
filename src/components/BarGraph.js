import React from "react";
import { Bar } from "react-chartjs-2";

function HistogramChart() {
  const data = {
    labels: ["", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "",
        data: [-20, -10, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgb(13,187,252)",
        borderColor: "rgb(13,187,252)",
        borderRadius: 14.1323,
      },
      {
        label: "",
        data: [0, 0, 20, 10, 30, 20, 10, 5],
        backgroundColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(149,171,188 )",
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderColor: "rgba(54, 162, 235, 1)",
        borderRadius: 14.1323,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            labelString: "Bins",
          },
          barPercentage: 3,
          categoryPercentage: 0.5,
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            drawTicks: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Frequency",
          },
          stacked: false,
          ticks: {
            beginAtZero: true,
            stepSize: 10,
          },
          gridLines: {
            drawTicks: false,
            drawBorder: false,
          },
        },
      ],
    },
  };

  return <Bar data={data} options={options} />;
}

export default HistogramChart;
