import { HiOutlineBolt } from "react-icons/hi2";
import { CiPause1 } from "react-icons/ci";
import { campaignData } from "../../../_component/campaignModal";
import { StatCard, StatItem } from "./_component/statcard";
import Hint from "./_component/hint";
import { CiEdit } from "react-icons/ci";

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

function Detail() {
  return (
    <div className=" bg-background p-4 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between mb-6 ">
        <div className="">
          <h2 className=" text-2xl font-semibold">Campaign One (1) Overview</h2>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <button className="flex items-center justify-center gap-2 border border-primary bg-transparent text-sm text-primary px-4 py-2 rounded-full ">
            Edit
            <CiEdit className="text-lg" />
          </button>
          <button className="flex items-center justify-center gap-2 border border-primary bg-transparent text-sm text-primary px-4 py-2 rounded-full ">
            Pause Campaign
            <CiPause1 className="text-lg" />
          </button>
          <button className="flex items-center justify-center gap-2 border border-primary text-sm text-white px-4 py-2 rounded-full bg-primary">
            Automate Campaign
            <HiOutlineBolt className="text-lg" />
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row  gap-6 mb-10 ">
        <div className="flex-1 bg-[#191817] border border-[#252525] rounded-3xl p-4 mb-6">
          <h3 className="text-xl font-semibold mb-1">
            {campaignData.campaignName}
          </h3>
          <p className="text-text mb-6">{campaignData.description}</p>
          <img
            src={campaignData.image}
            alt="Campaign"
            className="w-full rounded-3xl mb-6"
          />
          <div className="grid grid-cols-3 gap-4 text-center ">
            <div>
              <p className="font-semibold text-text mb-4">Audience</p>
              <p>{campaignData.audience}</p>
            </div>
            <div>
              <p className="font-semibold text-text mb-4">Interest</p>
              <p>{campaignData.interest}</p>
            </div>
            <div>
              <p className="font-semibold text-text mb-4">Budget</p>
              <p>{campaignData.budget}</p>
            </div>
          </div>
        </div>
        <div className="flex-1 grid-cols-1 grid md:grid-cols-2 gap-6">
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
      </div>
      <div className="flex-1 bg-[#191817] border border-[#252525] rounded-3xl p-4 mb-10">
        <h2 className=" text-2xl font-semibold mb-20">Timeline</h2>
        <div className="flex items-center justify-around gap-6">
          {[1, 2].map((_, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="font-medium">Dec 01</div>
            </div>
          ))}
        </div>
      </div>
      <Hint />
    </div>
  );
}

export default Detail;
