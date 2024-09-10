import React, { useEffect, useRef } from 'react';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

const FinanceGraph: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      if (ctx) {
        const config: ChartConfiguration = {
          type: 'line',
          data: {
            labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            datasets: [
              {
                label: 'Revenue',
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 80, 100, 120],
                fill: true,
                backgroundColor: (context: any) => {
                  const chart = context.chart;
                  const {ctx, chartArea} = chart;
                  if (!chartArea) {
                    return null;
                  }
                  const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                  gradient.addColorStop(0, 'rgba(173, 216, 230, 0.5)');
                  gradient.addColorStop(1, 'rgba(173, 216, 230, 0)');
                  return gradient;
                },
                borderColor: 'rgba(173, 216, 230, 1)',
                borderWidth: 2,
                tension: 0.4,
              },
              {
                label: 'Profit',
                data: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
                fill: true,
                backgroundColor: (context: any) => {
                  const chart = context.chart;
                  const {ctx, chartArea} = chart;
                  if (!chartArea) {
                    return null;
                  }
                  const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                  gradient.addColorStop(0, 'rgba(135, 206, 235, 0.5)');
                  gradient.addColorStop(1, 'rgba(135, 206, 235, 0)');
                  return gradient;
                },
                borderColor: 'rgba(135, 206, 235, 1)',
                borderWidth: 2,
                tension: 0.4,
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                mode: 'index',
                intersect: false,
              }
            },
            scales: {
              x: {
                grid: {
                  display: false
                },
                ticks: {
                  display: false,
                },
                border: {
                  display: false,
                }
              },
              y: {
                beginAtZero: true,
                grid: {
                  display: false
                },
                ticks: {
                    display: false,
                },
                border: {
                  display: false,
                }
              }
            },
            elements: {
              point: {
                radius: 0
              },
            },
            interaction: {
              intersect: false,
              mode: 'index',
            },
          }
        };

        new Chart(ctx, config);
      }
    }
  }, []);

  return (
    <div className="w-full h-64">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default FinanceGraph;