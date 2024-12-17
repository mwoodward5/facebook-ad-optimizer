import { Link } from "react-router";
import AdManager from "./_component/adManager";
import Campaign from "./_component/campaign";
import EngagementsCalendar from "./_component/engagementCalendar";
import PerformanceTrends from "./_component/performanceTrends";
import IMAGES from "../../../../assets/images";
import ScheduleCalendar, { ScheduledPost } from "./_component/scheduleCalendar";
import AdsMetricsChart from "./_component/adsMetricsChart";
import CraigslistAdsUpdate from "./_component/craigslistAdsUpdate";

const posts: ScheduledPost[] = [
  { date: new Date(2024, 10, 29), adName: ["Ad Name"] }, // March 2nd
  { date: new Date(2024, 11, 2), adName: ["Ad Name"] }, // March 2nd
  { date: new Date(2024, 11, 5), adName: ["Ad name", "Ad Name"] }, // March 5th
  { date: new Date(2024, 11, 7), adName: ["Ad Name"] }, // March 7th
  { date: new Date(2024, 11, 12), adName: ["Ad Name"] }, // March 12th
  { date: new Date(2024, 11, 14), adName: ["Ad Name"] }, // March 14th
  { date: new Date(2024, 11, 19), adName: ["Ad Name"] }, // March 19th
  { date: new Date(2024, 11, 23), adName: ["Ad Name"] }, // March 23rd
  { date: new Date(2024, 11, 30), adName: ["Ad Name"] }, // March 30th
];

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
          name="Campaign 2"
          spends={40}
          image={IMAGES.card1}
          roi={65}
          clicks={85}
          onPause={handlePause}
          onOptimize={handleOptimize}
        />
        <Campaign
          name="Campaign 3"
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
      <ScheduleCalendar posts={posts} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AdsMetricsChart />
        <CraigslistAdsUpdate />
      </div>
    </div>
  );
}

export default Overview;
