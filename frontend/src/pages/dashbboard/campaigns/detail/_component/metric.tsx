import React from "react";
import ReactApexChart from "react-apexcharts";
import { FaArrowDownLong } from "react-icons/fa6";
import { TiWarningOutline } from "react-icons/ti";

const Metric: React.FC = () => {
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: false },
    },
    colors: ["#ff0000"], // Red color for bars
    plotOptions: {
      bar: { columnWidth: "20%", borderRadius: 5, distributed: true },
    },
    legend: { show: false },
    xaxis: {
      categories: [
        "Dec 1",
        "Dec 2",
        "Dec 3",
        "Dec 4",
        "Dec 5",
        "Dec 6",
        "Dec 7",
      ],
      labels: { style: { colors: "#FFFFFF" } },
    },
    yaxis: {
      labels: {
        style: { colors: "#FFFFFF" },
        formatter: (value: number) => `${value}%`,
      },
    },
    grid: { borderColor: "#333", strokeDashArray: 3 },
    dataLabels: { enabled: false },
    tooltip: { theme: "dark" },
  };

  const chartSeries = [
    {
      name: "CTR",
      data: [1.7, 1.4, 1.3, 1.2, 1.1, 1.1, 0.7],
    },
  ];

  return (
    <div className=" py-6 rounded-lg shadow-md text-white max-w-lg mx-auto">
      <h2 className="text-lg  mb-2">CTR</h2>
      <p className="text-2xl font-bold mb-4">0.7%</p>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold mb-2">CTR trend over a week</h3>

        <div className="flex items-center mt-4 bg-red-500 bg-opacity-20 rounded p-1 px-2">
          <span className="text-red-500 font-bold mr-2">+5.50%</span>
          <FaArrowDownLong className="text-red-500" />
        </div>
      </div>
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={300}
      />
      <div className="mt-6">
        <div className="flex items-center gap-2 text-2xl mb-2">
          <TiWarningOutline className="text-red-500 text-2xl" />
          <p className="font-semibold">CTR Needs Improvement</p>
        </div>
        <ul className="mt-2 px-4 space-y-2 text-text list-disc">
          <li>Use more engaging images.</li>
          <li>Target a narrower audience for relevance.</li>
        </ul>
      </div>
    </div>
  );
};

export default Metric;
