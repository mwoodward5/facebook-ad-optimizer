import React, { useState } from "react";
import Chart from "react-apexcharts";

const AdsMetricsChart: React.FC = () => {
  // State for the selected week filter (optional)
  const [selectedFilter, setSelectedFilter] = useState("This week");

  // Chart Data
  const series = [
    {
      name: "Clicks",
      data: [18000, 14000, 15000, 12000, 9000, 7000, 15000], // Sample data for Clicks
    },
    {
      name: "Engagement",
      data: [12000, 11000, 4000, 6000, 13000, 10000, 12000], // Sample data for Engagement
    },
    {
      name: "Total Ads Posted",
      data: [16000, 17000, 14000, 15000, 8000, 9000, 10000], // Sample data for Ads Posted
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    colors: ["#FD7913", "#00A35E", "#ff0000"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        borderRadius: 6,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      labels: {
        style: {
          colors: "#ffffff", // White text
        },
      },
    },
    yaxis: [
      {
        title: {
          text: "Clicks & Engagement",
          style: { color: "#ffffff" },
        },
        labels: { style: { colors: "#ffffff" } },
      },
      {
        opposite: true,
        title: {
          text: "Total Ads Posted",
          style: { color: "#ffffff" },
        },
        labels: { style: { colors: "#ffffff" } },
      },
    ],
    legend: {
      show: true,
      labels: { colors: "#ffffff" },
    },
    grid: {
      borderColor: "#252525",
    },
    tooltip: {
      theme: "dark",
    },
  };

  return (
    <div className="p-6 bg-[#191817] border border-[#252525] rounded-3xl text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Craigslist Ads Metrics</h2>
        <div>
          <select
            className="bg-[#191817] border border-[#252525] rounded-lg p-2 text-white"
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <option>This week</option>
            <option>Last week</option>
            <option>Last month</option>
          </select>
        </div>
      </div>

      {/* Chart */}
      <Chart options={options} series={series} type="bar" height={300} />
    </div>
  );
};

export default AdsMetricsChart;
