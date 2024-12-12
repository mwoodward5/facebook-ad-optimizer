import React from "react";
import IMAGES from "../../assets/images";
import { useCampaign } from "../../context/campaign";
import { useNavigate } from "react-router";

export const campaignData = {
  date: "December 1st",
  campaignName: "Campaign Name",
  description: "Campaign Description / purpose goes here",
  image: IMAGES.campaign_card,
  audience: "Old people",
  interest: "Answer",
  budget: "$100.00",
  metrics: {
    ctr: "2.5%",
    reach: "5000",
    spend: "$300",
    ageGroup: "18 - 24",
    topCity: "New York",
  },
};

const CampaignModal: React.FC = () => {
  const { setShowModal } = useCampaign();
  const navigate = useNavigate();

  return (
    <section className="">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2
          onClick={() => {
            navigate("/campaigns/123");
            setShowModal(null);
          }}
          className="text-2xl font-medium cursor-pointer"
        >
          Performance for {campaignData.date}
        </h2>
        <select
          className="border border-[#252525] bg-background px-4 py-2 rounded-full outline-none"
          defaultValue="Campaign 1"
        >
          <option value="Campaign 1">Campaign 1</option>
          <option value="Campaign 2">Campaign 2</option>
        </select>
      </div>

      {/* Campaign Details */}
      <div className="bg-[#191817] border border-[#252525] rounded-3xl p-4 mb-6">
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

      {/* Metrics */}
      <div className="">
        <h3 className="text-xl font-semibold mb-4">Metrics</h3>
        <div className=" text-text border border-[#252525] rounded-3xl p-4">
          <div className="flex p-4 border-b border-[#252525]">
            <span className="flex-1 font-semibold ">CTR</span>
            <span className="text-white flex-1">
              {campaignData.metrics.ctr}
            </span>
          </div>
          <div className="flex p-4 border-b border-[#252525]">
            <span className="flex-1 font-semibold ">Reach</span>
            <span className="text-white flex-1">
              {campaignData.metrics.reach}
            </span>
          </div>
          <div className="flex p-4 border-b border-[#252525]">
            <span className="flex-1 font-semibold ">Spend</span>
            <span className="text-white flex-1">
              {campaignData.metrics.spend}
            </span>
          </div>
          <div className="flex p-4 border-b border-[#252525]">
            <span className="flex-1 font-semibold ">Age group</span>
            <span className="text-white flex-1">
              {campaignData.metrics.ageGroup}
            </span>
          </div>
          <div className="flex p-4 border-b border-[#252525]">
            <span className="flex-1 font-semibold">Top city</span>
            <span className="text-white flex-1">
              {campaignData.metrics.topCity}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignModal;
