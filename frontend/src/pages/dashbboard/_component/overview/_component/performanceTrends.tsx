import React from "react";
import ReactApexChart from "react-apexcharts";

const PerformanceTrends: React.FC = () => {
  // Chart options
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "line",
      background: "transparent",
      toolbar: { show: false },
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    grid: {
      borderColor: "#252525",
    },
    colors: ["#ffa500", "#ff4d4d", "#32cd32"], // Colors for lines
    xaxis: {
      categories: ["31 Aug", "31 Sep", "31 Oct", "31 Nov"],
      labels: {
        style: { colors: "#bbb" },
      },
    },
    yaxis: [
      {
        title: {
          text: "Impressions",
          style: { color: "#BDBEC0" },
        },
        labels: {
          style: { colors: "#BDBEC0" },
        },
      },
      {
        opposite: true,
        title: {
          text: "CTR & ROI",
          style: { color: "#BDBEC0" },
        },
        labels: {
          style: { colors: "#BDBEC0" },
        },
      },
    ],
    tooltip: {
      theme: "dark",
    },
    legend: {
      position: "bottom",
      labels: { colors: "#BDBEC0" },
    },
  };

  // Chart data
  const chartSeries = [
    { name: "Impressions", data: [15000, 18000, 12000, 20000] },
    { name: "CTR", data: [5.6, 4.8, 6.2, 5.2] },
    { name: "ROI", data: [12, 14, 10, 16] },
  ];

  return (
    <div className="p-6 bg-[#191817] border border-[#252525] rounded-3xl">
      <h2 className="text-lg font-semibold mb-4">Performance Trends</h2>
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={300}
      />
    </div>
  );
};

export default PerformanceTrends;
