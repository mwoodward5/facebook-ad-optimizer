import Campaign from "../_component/overview/_component/campaign";

function Campaigns() {
  const handlePause = () => alert("Pause Campaign");
  const handleOptimize = () => alert("Optimize Now");
  return (
    <div className="p-8 bg-background">
      <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between pb-8">
        <div className="">
          <h2 className=" text-2xl font-semibold">Campaigns</h2>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center w-full md:w-auto justify-center gap-2 border border-primary text-sm text-white px-4 py-2 rounded-full bg-primary">
            Optimize All Campaigns
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
          <Campaign
            key={index}
            name="Campaign 1"
            image="/campaign-image.jpg" // Replace with your image path
            spends={40}
            roi={65}
            clicks={85}
            onPause={handlePause}
            onOptimize={handleOptimize}
          />
        ))}
      </div>
    </div>
  );
}

export default Campaigns;
