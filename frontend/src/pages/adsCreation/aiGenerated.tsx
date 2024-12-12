import { campaignData } from "../_component/campaignModal";

function AiGenerated() {
  return (
    <div className="max-w-5xl mx-auto bg-[#191817] border border-[#252525] rounded-3xl md:mt-8 p-4 md:p-8">
      <h1 className="text-2xl font-medium mb-10">AI-generated ads</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="bg-[#191817] border border-[#252525] rounded-3xl p-4 mb-6"
          >
            <h3 className="text-xl font-semibold mb-1">
              {campaignData.campaignName}
            </h3>
            <p className="text-text mb-6">{campaignData.description}</p>
            <img
              src={campaignData.image}
              alt="Campaign"
              className="w-full rounded-3xl mb-6"
            />
            <div className="grid grid-cols-3 gap-4 ">
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
        ))}
      </div>
      <div className={`mt-8 flex md:justify-end`}>
        <button
          //   onClick={handleNext}
          className="bg-primary text-white font-medium px-8 py-2 rounded-full flex-1"
        >
          Launch Campaign
        </button>
      </div>
    </div>
  );
}

export default AiGenerated;
