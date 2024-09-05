"use client";
import React, { useEffect } from "react";
import { Chart } from "chart.js/auto";

const ActiveCustomersChart = () => {
  useEffect(() => {
    var ctx = (
      document.getElementById("myStackedChart") as HTMLCanvasElement
    )?.getContext("2d");
    if (ctx) {
      var myStackedChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC",
          ],
          datasets: [
            {
              data: [66, 144, 146, 116, 107, 131, 43, 78, 120, 50, 105, 148],
              label: "Profit",
              borderColor: "rgb(109, 253, 181)",
              backgroundColor: "#F1BA40",
              borderWidth: 1,
              borderRadius: 50,
            },
            {
              data: [54, 80, 120, 90, 40, 110, 130, 76, 89, 135, 150, 99],
              label: "Income",
              borderColor: "rgb(109, 253, 181)",
              backgroundColor: "#F1BA4060",
              borderWidth: 1,
              borderRadius: 50,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
        },
      });
    }
  }, []);
  return (
    <div className="w-full h-fit my-auto">
      <canvas id="myStackedChart"></canvas>
    </div>
  );
};

export default ActiveCustomersChart;
