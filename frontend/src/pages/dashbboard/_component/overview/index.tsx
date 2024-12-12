import { Link } from "react-router";
import AdManager from "./_component/adManager";
import Campaign from "./_component/campaign";
import EngagementsCalendar from "./_component/engagementCalendar";
import PerformanceTrends from "./_component/performanceTrends";
import IMAGES from "../../../../assets/images";

function Overview() {
  const handlePause = () => alert("Pause Campaign");
  const handleOptimize = () => alert("Optimize Now");
  return (
    <div className="p-4 md:p-8 bg-background space-y-8">
      <div className="flex items-center justify-between ">
        <div className="text-xl font-semibold">Overview</div>
        <Link to="/campaigns" className=" text-primary cursor-pointer">
          View All Campaigns
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Campaign
          name="Campaign 1"
          image={IMAGES.card1}
          spends={40}
          roi={65}
          clicks={85}
          onPause={handlePause}
          onOptimize={handleOptimize}
        />
        <Campaign
          name="Campaign 1"
          spends={40}
          image={IMAGES.card1}
          roi={65}
          clicks={85}
          onPause={handlePause}
          onOptimize={handleOptimize}
        />
        <Campaign
          name="Campaign 1"
          spends={40}
          image={IMAGES.card1}
          roi={65}
          clicks={85}
          onPause={handlePause}
          onOptimize={handleOptimize}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <AdManager
          title="Facebook Ad Manager"
          description="75% of your campaigns are fully automated. Manual edits needed for creative refreshes."
          value={75}
        />
        <div className="col-span-1 md:col-span-3">
          <EngagementsCalendar />
        </div>
      </div>
      <PerformanceTrends />
    </div>
  );
}

export default Overview;
