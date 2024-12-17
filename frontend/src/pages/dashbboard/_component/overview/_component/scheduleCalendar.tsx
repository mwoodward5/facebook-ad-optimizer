import React, { useState } from "react";

// Interface for scheduled posts
export interface ScheduledPost {
  date: Date; // Use Date object
  adName: string[];
}

interface CalendarProps {
  posts: ScheduledPost[];
}

const ScheduleCalendar: React.FC<CalendarProps> = ({ posts }) => {
  // Current Date Reference
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // State to manage displayed month and year
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Get days in the selected month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Adjust first day of the month (making Monday = 0)
  const firstDay = new Date(year, month, 1).getDay();
  const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;

  // Total cells including previous/next month padding
  const totalCells =
    adjustedFirstDay +
    daysInMonth +
    ((42 - (adjustedFirstDay + daysInMonth)) % 7);

  // Generate Calendar Days (including adjacent months)
  const calendarDays = Array.from({ length: totalCells }, (_, index) => {
    let date: Date;

    if (index < adjustedFirstDay) {
      // Previous Month
      const prevMonthDays = new Date(year, month, 0).getDate();
      const day = prevMonthDays - adjustedFirstDay + index + 1;
      date = new Date(year, month - 1, day);
    } else if (index >= adjustedFirstDay + daysInMonth) {
      // Next Month
      const day = index - adjustedFirstDay - daysInMonth + 1;
      date = new Date(year, month + 1, day);
    } else {
      // Current Month
      const day = index - adjustedFirstDay + 1;
      date = new Date(year, month, day);
    }

    return date;
  });

  // Check if two dates are the same
  const isSameDate = (d1: Date, d2: Date): boolean =>
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear();

  // Generate future months for the dropdown
  const futureMonths = Array.from({ length: 12 }, (_, i) => {
    const date = new Date(currentYear, currentMonth + i);
    return { month: date.getMonth(), year: date.getFullYear() };
  });

  // Handle month/year dropdown change
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [selectedYear, selectedMonth] = e.target.value.split("-").map(Number);
    setMonth(selectedMonth);
    setYear(selectedYear);
  };

  return (
    <div className="p-6 bg-[#191817] border border-[#252525] rounded-3xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Scheduled Posts</h2>
        <select
          className="border border-[#252525] text-white p-2 rounded-full bg-[#191817]"
          value={`${year}-${month}`}
          onChange={handleChange}
        >
          {futureMonths.map(({ year, month }) => (
            <option key={`${year}-${month}`} value={`${year}-${month}`}>
              {new Date(year, month).toLocaleString("default", {
                month: "long",
              })}{" "}
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Calendar */}
      <div className="bg-background rounded-3xl border border-[#252525] overflow-hidden">
        {/* Days of the Week */}
        <div className="grid grid-cols-7 text-gray-400">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="font-semibold p-4 py-2 text-center border-x border-[#252525]"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 border border-[#252525]">
          {calendarDays.map((date, index) => {
            const post = posts.find((p) => isSameDate(p.date, date));
            const isCurrentMonth = date.getMonth() === month;

            return (
              <div
                key={index}
                className={`p-2 border min-h-28 border-[#252525] flex flex-col justify-between ${
                  isCurrentMonth
                    ? "text-white"
                    : "text-gray-500 opacity-50 bg-[#191817]"
                }`}
              >
                {/* Day Number */}
                <div className="text-sm mb-1">{date.getDate()}</div>

                {/* Scheduled Posts */}
                {post?.adName.map((name, i) => (
                  <p
                    key={i}
                    className="bg-green-500 text-green-500 bg-opacity-10 px-2 py-1 text-xs rounded-md mt-1 truncate"
                  >
                    {name}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScheduleCalendar;
