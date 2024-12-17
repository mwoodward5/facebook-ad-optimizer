import React, { useState } from "react";
import { useCampaign } from "../../../../../context/campaign";

interface EngagementDay {
  day: string;
  value: "Low" | "Average" | "High";
}

const EngagementsCalendar: React.FC = () => {
  const { setShowModal } = useCampaign();

  const [month, setMonth] = useState("December");

  // Sample data for a month (replace with dynamic data from API)
  const data: EngagementDay[][] = [
    [
      { day: "1st", value: "High" },
      { day: "2nd", value: "Low" },
      { day: "3rd", value: "High" },
      { day: "2nd", value: "Low" },
      { day: "4th", value: "Average" },
      { day: "5th", value: "High" },
      { day: "6th", value: "Low" },
      { day: "7th", value: "Low" },
      { day: "2st", value: "High" },
      { day: "3rd", value: "Low" },
      { day: "4th", value: "Average" },
      { day: "7th", value: "Low" },
      { day: "5th", value: "High" },
      { day: "4th", value: "Average" },
      { day: "5th", value: "High" },
      { day: "6th", value: "Low" },
      { day: "1t", value: "High" },
      { day: "2nd", value: "Average" },
      { day: "3rd", value: "High" },
      { day: "6th", value: "Low" },
      { day: "7th", value: "High" },
      { day: "7th", value: "Low" },
      { day: "1s", value: "High" },
      { day: "2nd", value: "Low" },
      { day: "5th", value: "High" },
      { day: "4th", value: "Average" },
      { day: "1t", value: "High" },
      { day: "2nd", value: "Low" },
      { day: "3rd", value: "Average" },
      { day: "6th", value: "Low" },
      { day: "3rd", value: "Low" },
    ],
    // Additional weeks...
  ];

  const bestDay = { day: "14th", reason: "120% ROI, highest engagement." };
  const worstDay = {
    day: "16th",
    reason: "CTR dropped to 0.8%, low audience reach.",
  };

  const getColor = (value: "Low" | "Average" | "High") => {
    switch (value) {
      case "Low":
        return "bg-red-500";
      case "Average":
        return "bg-yellow-500";
      case "High":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="p-6 bg-[#191817] border border-[#252525] rounded-3xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Engagements</h2>
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="border border-[#252525]  text-white p-2 rounded-full bg-[#191817]"
        >
          <option>December</option>
          <option>November</option>
          <option>October</option>
        </select>
      </div>

      {/* Calendar */}
      <div className="grid grid-cols-7 gap-2 text-center">
        {/* Day labels */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-text">
            {day}
          </div>
        ))}

        {/* Engagement Data */}
        {data.flat().map((item, index) => (
          <div
            key={index}
            className={`h-8 flex items-center justify-center cursor-pointer text-sm font-medium rounded-sm opacity-70 hover:opacity-100 ${getColor(
              item.value
            )}`}
            onClick={() => setShowModal(true)}
          >
            {item.day === "1st" && item.day}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex gap-10 items-center text-sm text-text mt-6">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div> Low
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>{" "}
          Average
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div> High
        </div>
      </div>

      {/* Best & Worst Days */}
      <div className="mt-4 text-text">
        <div className="flex items-center ">
          <span className="mr-2 text-green-400">↑ Best day:</span>
          {bestDay.day} – {bestDay.reason}
        </div>
        <div className="flex items-center  mt-2">
          <span className="mr-2 text-red-400">↓ Worst day:</span>
          {worstDay.day} – {worstDay.reason}
        </div>
      </div>
    </div>
  );
};

export default EngagementsCalendar;
