import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

interface AdManagerProps {
  title: string;
  description: string;
  value: number; // Percentage value (0-100)
}

const AdManager: React.FC<AdManagerProps> = ({ title, description, value }) => {
  return (
    <div className="p-6 bg-[#191817] border border-[#252525] rounded-3xl col-span-2">
      {/* Header */}
      <div className="">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-400">{description}</p>
      </div>

      {/* Speedometer */}
      <div className="flex  justify-center items-center ">
        <div className="w-[500px] h-72 ">
          <ReactSpeedometer
            needleHeightRatio={0.4}
            minValue={0}
            maxValue={100}
            maxSegmentLabels={1}
            segments={5555}
            fluidWidth
            value={value}
            textColor="#FFFFFF"
            needleColor="#FFFFFF"
            currentValueText={`${value}% automation`}
          />
        </div>
      </div>
    </div>
  );
};

export default AdManager;
