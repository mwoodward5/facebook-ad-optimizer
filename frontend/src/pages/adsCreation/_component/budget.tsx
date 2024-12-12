import React, { useState } from "react";
interface Props {
  previous: () => void;
}

const Budget: React.FC<Props> = ({ previous }) => {
  const [dailyBudget, setDailyBudget] = useState<string>("100");
  const [totalBudget, setTotalBudget] = useState<string>("500");
  const [startDate, setStartDate] = useState<string>("2024-12-02");
  const [endDate, setEndDate] = useState<string>("2024-12-17");

  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Daily Budget */}
        <div className="space-y-2">
          <label className="block text-text">Daily Budget</label>
          <div className="relative flex items-center">
            <input
              type="text"
              value={`$${dailyBudget}`}
              onChange={(e) => setDailyBudget(e.target.value.replace("$", ""))}
              className="bg-transparent border border-[#252525] p-3 w-full rounded-md text-white outline-none"
            />
            <span className="absolute top-1/2 right-4 -translate-y-1/2 ml-2 text-green-400">
              Spot on
            </span>
          </div>
        </div>

        {/* Total Budget */}
        <div className="space-y-2">
          <label className="block text-text">Total</label>
          <div className="relative flex items-center">
            <input
              type="text"
              value={`$${totalBudget}`}
              onChange={(e) => setTotalBudget(e.target.value.replace("$", ""))}
              className="bg-transparent border border-[#252525] p-3 w-full rounded-md text-white outline-none"
            />
            <span className="absolute top-1/2 right-4 -translate-y-1/2 ml-2 text-yellow-400">
              Almost there!
            </span>
          </div>
        </div>

        {/* Start Date */}
        <div className="space-y-2">
          <label className="block text-text">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="bg-[#191817] border border-[#252525] p-3 w-full rounded-md text-white outline-none"
          />
        </div>

        {/* End Date */}
        <div className="space-y-2">
          <label className="block text-text">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="bg-[#191817] border border-[#252525] p-3 w-full rounded-md text-white outline-none"
          />
        </div>
      </div>

      {/* Summary Section */}
      <div className="mt-8 p-6 bg-[#252525] w-full md:w-1/2 rounded-lg relative">
        <h3 className="text-lg font-semibold mb-4">Summary</h3>
        <div className="space-y-6">
          <div className="flex justify-between text-text">
            <span>Objective</span>
            <span className="text-white">Engagement</span>
          </div>
          <div className="flex justify-between text-text">
            <span>Audience</span>
            <span className="text-white">Gender, Location, interests</span>
          </div>
          <div className="flex justify-between text-text">
            <span>Budget</span>
            <span className="text-white">${totalBudget} over 15 days</span>
          </div>
        </div>
        <p className="mt-4 text-yellow-400 flex items-center">
          <span className="mr-2">&#x26A0;</span> Budget may be insufficient.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className={`mt-8 flex gap-4 justify-between`}>
        <button
          onClick={previous}
          className="bg-transparent border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white transition"
        >
          Previous
        </button>
        <button
          //   onClick={handleNext}
          className="bg-primary text-white font-medium px-8 py-2 rounded-full flex-1"
        >
          Launch Campaign
        </button>
      </div>
    </div>
  );
};

export default Budget;
