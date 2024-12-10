import React from "react";
import ReactApexChart from "react-apexcharts";

interface CampaignProps {
  name: string;
  image: string;
  spends: number; // Percentage (0-100)
  roi: number; // Percentage (0-100)
  clicks: number; // Percentage (0-100)
  onPause: () => void;
  onOptimize: () => void;
}

const Campaign: React.FC<CampaignProps> = ({
  name,
  image,
  spends,
  roi,
  clicks,
  onPause,
  onOptimize,
}) => {
  const generateChartOptions = (
    value: number,
    color: string,
    label: string
  ): ApexCharts.ApexOptions => ({
    chart: {
      type: "radialBar",
      background: "transparent",
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "60%",
        },
        track: {
          background: "#1a1a1a", // Background track color
          strokeWidth: "100%",
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: "14px",
            fontWeight: "bold",
            offsetY: -10,
            color: "#ffffff",
          },
          value: {
            show: true,
            fontSize: "16px",
            fontWeight: "bold",
            color: "#ffffff",
            offsetY: 10,
          },
          total: {
            show: true,
            label,
            color: "#ffffffd2",
            fontSize: "14px",
            fontWeight: "normal",
          },
        },
      },
    },
    fill: {
      colors: [color],
    },
    series: [value],
  });

  return (
    <div className="bg-[#191817] border border-[#252525] rounded-3xl text-white space-y-4 w-full">
      <div className="p-4">
        {/* Campaign Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={image}
              alt={name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <h2 className="text-lg font-medium">{name}</h2>
          </div>
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
        </div>

        {/* Stats */}
        <div className="flex justify-around items-center ">
          {/* Spends */}
          <div className="flex flex-col items-center">
            <ReactApexChart
              options={generateChartOptions(spends, "#4CAF50", "Spends")}
              series={[spends]}
              type="radialBar"
              height={120}
              width={120}
            />
          </div>

          {/* ROI */}
          <div className="flex flex-col items-center">
            <ReactApexChart
              options={generateChartOptions(roi, "#FFC107", "ROI")}
              series={[roi]}
              type="radialBar"
              height={120}
              width={120}
            />
          </div>

          {/* Clicks */}
          <div className="flex flex-col items-center">
            <ReactApexChart
              options={generateChartOptions(clicks, "#F44336", "Clicks")}
              series={[clicks]}
              type="radialBar"
              height={120}
              width={120}
            />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center p-4 border-t border-[#252525]">
        <button onClick={onPause} className="text-primary text-sm font-medium">
          Pause Campaign
        </button>
        <button
          onClick={onOptimize}
          className="bg-transparent text-primary text-sm font-medium border border-primary px-4 py-1 rounded-full"
        >
          Optimize Now
        </button>
      </div>
    </div>
  );
};

export default Campaign;