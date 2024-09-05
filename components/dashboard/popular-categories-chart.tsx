"use client";
import React, { useEffect } from "react";
import { Chart } from "chart.js/auto";

const PopularCategoriesChart = () => {
  useEffect(() => {
    var ctx = (
      document.getElementById("popularCategoriesChart") as HTMLCanvasElement
    )?.getContext("2d");
    if (ctx) {
      var myChart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: [
            "Fashion",
            "Shoes",
            "Apparel",
            "Crockery",
            "Toys",
            "Electronics",
          ],
          datasets: [
            {
              data: [30, 20, 30, 5, 10, 5],
              borderColor: [
                "#3cba9f",
                "#ffa500",
                "#c45850",
                "#7DDED6",
                "#F1BA40",
                "#4584FF",
              ],
              backgroundColor: [
                "#3cba9f",
                "#ffa500",
                "#c45850",
                "#7DDED6",
                "#F1BA40",
                "#4584FF",
              ],
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
          },
        },
      });
    }
  }, []);
  return (
    <div className="w-full h-fit md:h-[500px] xl:h-fit flex justify-center">
      <canvas id="popularCategoriesChart"></canvas>
    </div>
  );
};

export default PopularCategoriesChart;
