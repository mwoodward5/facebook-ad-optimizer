import React, { useState } from "react";

const SchedulePost: React.FC = () => {
  const [schedule, setSchedule] = useState({
    month: "December",
    day: "16",
    year: "2024",
    hour: "06",
    minute: "00",
    ampm: "PM",
  });

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = Array.from({ length: 31 }, (_, i) => `${i + 1}`);
  const years = ["2024", "2025", "2026"];
  const hours = Array.from({ length: 12 }, (_, i) =>
    i + 1 < 10 ? `0${i + 1}` : `${i + 1}`
  );
  const minutes = ["00", "15", "30", "45"];
  const ampm = ["AM", "PM"];

  const handleChange = (key: string, value: string) => {
    setSchedule((prev) => ({ ...prev, [key]: value }));
  };

  const handleConfirm = () => {
    const { month, day, year, hour, minute, ampm } = schedule;
    alert(
      `Ad will be posted on ${month} ${day}, ${year} at ${hour}:${minute} ${ampm}`
    );
  };

  return (
    <div className="p-6 text-white max-w-lg">
      <h2 className="text-2xl font-medium mb-2">Schedule Post</h2>
      <p className="text-gray-400 mb-4">
        Ads would be posted on {schedule.month} {schedule.day}, {schedule.year}{" "}
        at {schedule.hour}:{schedule.minute} {schedule.ampm}
      </p>

      {/* Select Fields */}
      <div className="grid grid-cols-3 gap-4">
        {/* Month */}
        <div>
          <label className="text-sm">Month</label>
          <select
            value={schedule.month}
            onChange={(e) => handleChange("month", e.target.value)}
            className="w-full p-2 rounded border bg-transparent border-[#252525] text-white"
          >
            {months.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        {/* Day */}
        <div>
          <label className="text-sm">Day</label>
          <select
            value={schedule.day}
            onChange={(e) => handleChange("day", e.target.value)}
            className="w-full p-2 rounded border bg-transparent border-[#252525] text-white"
          >
            {days.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        {/* Year */}
        <div>
          <label className="text-sm">Year</label>
          <select
            value={schedule.year}
            onChange={(e) => handleChange("year", e.target.value)}
            className="w-full p-2 rounded border bg-transparent border-[#252525] text-white"
          >
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        {/* Hour */}
        <div>
          <label className="text-sm">Hour</label>
          <select
            value={schedule.hour}
            onChange={(e) => handleChange("hour", e.target.value)}
            className="w-full p-2 rounded border bg-transparent border-[#252525] text-white"
          >
            {hours.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
        </div>

        {/* Minute */}
        <div>
          <label className="text-sm">Minute</label>
          <select
            value={schedule.minute}
            onChange={(e) => handleChange("minute", e.target.value)}
            className="w-full p-2 rounded border bg-transparent border-[#252525] text-white"
          >
            {minutes.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        {/* AM/PM */}
        <div>
          <label className="text-sm">AM/PM</label>
          <select
            value={schedule.ampm}
            onChange={(e) => handleChange("ampm", e.target.value)}
            className="w-full p-2 rounded border bg-transparent border-[#252525] text-white"
          >
            {ampm.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Confirm Button */}
      <div className={`mt-8 flex md:justify-end`}>
        <button
          onClick={handleConfirm}
          className="mt-6 px-4 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded-full"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default SchedulePost;
