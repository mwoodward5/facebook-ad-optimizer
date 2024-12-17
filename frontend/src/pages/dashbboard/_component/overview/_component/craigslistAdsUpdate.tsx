import React from "react";

// AdStatus type definition
interface AdStatus {
  id: number;
  name: string;
  status: "Posted" | "Queued" | "Flagged";
  progress: number; // Value from 0 to 100
}

const CraigslistAdsUpdate: React.FC = () => {
  // Sample Data
  const ads: AdStatus[] = [
    { id: 1, name: "Ad Name 1", status: "Posted", progress: 100 },
    { id: 2, name: "Ad Name 2", status: "Queued", progress: 30 },
    { id: 3, name: "Ad Name 3", status: "Flagged", progress: 0 },
    { id: 4, name: "Ad Name 4", status: "Queued", progress: 30 },
    { id: 5, name: "Ad Name 5", status: "Posted", progress: 30 },
    { id: 6, name: "Ad Name 6", status: "Queued", progress: 30 },
  ];

  // Color mapping based on status
  const statusColors: Record<string, string> = {
    Posted: "bg-green-500",
    Queued: "bg-yellow-500",
    Flagged: "bg-red-500",
  };

  return (
    <div className="p-6 bg-[#191817] border border-[#252525] rounded-3xl text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Craigslist ads update</h2>
      </div>

      {/* Legend */}
      <div className="flex gap-4 mb-8 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-500"></span> Posted
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span> Queued
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span> Flagged
        </div>
      </div>

      {/* Ads List */}
      <div>
        {ads.map((ad) => (
          <div key={ad.id} className="flex items-center justify-between py-3">
            {/* Status Indicator and Name */}
            <div className="flex items-center gap-3">
              <span
                className={`w-3 h-3 rounded-full ${statusColors[ad.status]}`}
              ></span>
              <span>{ad.name}</span>
            </div>

            {/* Progress Bar */}
            <div className="flex-1 mx-4">
              <div className="relative w-full h-2 bg-gray-700 rounded-full">
                <div
                  className="absolute h-2 bg-orange-500 rounded-full"
                  style={{ width: `${ad.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Progress Text */}
            <div className="text-sm text-gray-400">
              {ad.progress > 0 ? `${ad.progress}% done` : "-"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CraigslistAdsUpdate;
