import React from "react";
import { FaPlus } from "react-icons/fa";
import Switch from "./_component/switch";

const Automation: React.FC = () => {
  const handleSwitchChange = (checked: boolean) => {
    console.log("Switch state:", checked);
  };
  return (
    <div className="min-h-screen py-6">
      {/* Automation Settings Section */}
      <div className="max-w-5xl mx-auto bg-[#191817] border border-[#252525] rounded-3xl">
        <div className="  border-b border-[#252525] space-y-6 p-8 pb-4 ">
          <h2 className="text-2xl font-medium mb-8">Automation Settings</h2>
          <div className="space-y-4">
            <div className="md:hidden flex">
              <div className="text-text flex-1">If</div>
              <div className="text-text flex-1 text-center">Action</div>
            </div>
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="text-text hidden md:block">If</div>
                <select
                  className="bg-[#191817] border border-[#252525] rounded-lg p-2 w-40  focus:outline-none"
                  defaultValue="CTR"
                >
                  <option>CTR</option>
                  <option>Metric 2</option>
                  <option>Metric 3</option>
                </select>
                <select
                  className="bg-[#251710] border border-[#341E0D] text-center rounded-lg p-2 w-10 appearance-none focus:outline-none"
                  defaultValue="<"
                >
                  <option>{"<"}</option>
                  <option>{">"}</option>
                  <option>{"="}</option>
                </select>
                <select
                  className="bg-[#191817] border border-[#252525] rounded-lg p-2 w-40  focus:outline-none"
                  defaultValue="CTR"
                >
                  <option>5%</option>
                  <option>10%</option>
                  <option>20%</option>
                </select>
                <div className="text-text hidden md:block">Action</div>
                <select
                  className="bg-[#191817] border border-[#252525] rounded-lg p-2 flex-1 focus:outline-none"
                  defaultValue="Pause Campaign"
                >
                  <option>Pause Campaign</option>
                  <option>Reallocate Budget</option>
                  <option>Send Notification</option>
                </select>
              </div>
            ))}
          </div>
          <button className="flex items-center justify-center md:justify-start gap-4 text-primary w-full md:w-auto">
            Add another rule <FaPlus />
          </button>
          <div className="flex md:justify-end">
            <button className="bg-primary w-full md:w-auto font-medium text-white py-2 px-6 rounded-full ">
              Save
            </button>
          </div>
        </div>
        <div className="  border-b border-[#252525] space-y-6 p-8 ">
          <h2 className="text-2xl font-medium mb-4">Recommended Automations</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg">Reallocate budgets automatically.</p>
                <p className="text-text">
                  Move funds from underperforming campaigns to high-performing
                  ones automatically.
                </p>
              </div>
              <Switch onChange={handleSwitchChange} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p>Pause Underperforming Ads</p>
                <p className="text-text">
                  Automatically pause ads with a CTR below 1% after 3 days.
                </p>
              </div>
              <Switch onChange={handleSwitchChange} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p>Ad Posting Automation</p>
                <p className="text-text">
                  Enable/disable automatic posting, Schedule posts, Define how
                  often ads should be posted.
                </p>
              </div>
              <Switch onChange={handleSwitchChange} />
            </div>
          </div>
        </div>
        <div className="border-b border-[#252525] space-y-6 p-8 ">
          <h2 className="text-2xl font-medium mb-4">
            How We Evaluate Campaigns
          </h2>
          <div className="space-y-2">
            <p className="flex items-center text-text gap-3">
              <span className="h-4 w-4 bg-green-500 rounded-full mr-2"></span>
              <span className="text-green-500">Green:</span> Your campaign is
              performing well. Keep it running!
            </p>
            <p className="flex items-center text-text gap-3">
              <span className="h-4 w-4 bg-yellow-500 rounded-full mr-2"></span>
              <span className="text-yellow-500">Yellow:</span> Minor tweaks
              could improve results.
            </p>
            <p className="flex items-center text-text gap-3">
              <span className="h-4 w-4 bg-red-500 rounded-full mr-2"></span>
              <span className="text-red-500"> Red:</span> Underperforming
              campaign. Consider pausing or revising.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automation;
