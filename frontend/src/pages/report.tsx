import { BsFiletypeCsv } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
import {
  StatCard,
  StatItem,
} from "./dashbboard/campaigns/detail/_component/statcard";
import Chart from "react-apexcharts";

const statsData: StatItem[] = [
  { label: "CTR", value: "0.7%", change: "+5.50%", changeType: "decrease" },
  { label: "Clicks", value: "1500", change: "20.47%", changeType: "neutral" },
  { label: "ROI", value: "15%", change: "+25.57%", changeType: "increase" },
  {
    label: "Social reach",
    value: "14k",
    change: "+13.97%",
    changeType: "decrease",
  },
  {
    label: "Spend Efficiency",
    value: "22%",
    change: "21.58%",
    changeType: "neutral",
  },
  {
    label: "Audience Engagement",
    value: "1000",
    change: "+12.05%",
    changeType: "decrease",
  },
  {
    label: "Impression",
    value: "50k",
    change: "24.67%",
    changeType: "neutral",
  },
  {
    label: "Spends",
    value: "$13,400.48",
    change: "+25.57%",
    changeType: "increase",
  },
];

function Report() {
  const lineChartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "straight",
    },
    xaxis: {
      categories: ["31 Sep", "31 Oct", "31 Nov", "31 Dec"],
      labels: { style: { colors: "white" } },
    },
    yaxis: {
      labels: {
        style: { colors: "white" },
      },
    },
    colors: ["#FF8C00"],
    tooltip: {
      theme: "dark",
    },
  };

  const lineChartSeries = [
    {
      name: "Impressions",
      data: [20000, 15000, 10000, 20000],
    },
  ];

  const barChartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      // stacked: true,
      toolbar: {
        show: false,
      },
    },

    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "20%",
        borderRadius: 5,
      },
    },
    legend: { show: false, position: "top" },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      labels: {
        style: { colors: "white" },
      },
    },
    yaxis: {
      labels: {
        style: { colors: "white" },
      },
    },
    colors: ["#00FF00", "#FF0000"],
    tooltip: {
      theme: "dark",
    },
  };

  const barChartSeries = [
    {
      name: "This Week",
      data: [15000, 10000, 20000, 15000, 5000, 15000, 5000],
    },
    {
      name: "Last Week",
      data: [5000, 8000, 10000, 5000, 10000, 5000, 15000],
    },
  ];

  return (
    <div className="p-4 md:p-8 space-y-4 md:space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between ">
        <div className="">
          <h2 className=" text-2xl font-semibold">Reports & Analytics</h2>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <button className="flex items-center justify-center gap-2 border border-primary bg-transparent text-sm text-primary px-4 py-2 rounded-full ">
            Export as CSV
            <BsFiletypeCsv />
          </button>
          <button className="flex items-center justify-center gap-2 border border-primary text-sm text-white px-4 py-2 rounded-full bg-primary">
            Export as PDF
            <FaRegFileAlt />
          </button>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatCard
            key={index}
            label={stat.label}
            value={stat.value}
            change={stat.change}
            changeType={stat.changeType}
          />
        ))}
      </div>
      <div className="bg-[#191817] border border-[#252525] rounded-3xl p-8">
        <h2 className="text-lg font-medium mb-4">Performance Over Time</h2>
        <Chart
          options={lineChartOptions}
          series={lineChartSeries}
          type="line"
          height={300}
        />
      </div>

      <div className="bg-[#191817] border border-[#252525] rounded-3xl p-8">
        <h2 className="text-lg font-medium mb-4">Compare Performance</h2>
        <Chart
          options={barChartOptions}
          series={barChartSeries}
          type="bar"
          height={300}
        />
      </div>
    </div>
  );
}

export default Report;
