"use client";
import React, { useEffect } from "react";
import { Chart } from "chart.js/auto";

const SalesReportGraph = () => {
  useEffect(() => {
    var ctx = (
      document.getElementById("myChart") as HTMLCanvasElement
    )?.getContext("2d");
    if (ctx) {
      var myChart = new Chart(ctx, {
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
              backgroundColor: "#4584FF",
              borderWidth: 1,
              borderRadius: 50,
            },
            {
              data: [54, 80, 120, 90, 10, 22, 130, 76, 89, 135, 150, 99],
              label: "Income",
              borderColor: "rgb(109, 253, 181)",
              backgroundColor: "#B9D1FF",
              borderWidth: 1,
              borderRadius: 50,
            },
          ],
        },
      });
    }
  }, []);
  return (
    <div className="w-full h-fit my-auto">
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default SalesReportGraph;
