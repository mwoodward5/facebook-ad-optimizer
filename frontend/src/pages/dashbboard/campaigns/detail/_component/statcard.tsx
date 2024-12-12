import { useState } from "react";
import DrawerModal from "../../../../_component/drawerModal";
import Metric from "./metric";

export interface StatItem {
  label: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease" | "neutral";
}

export const StatCard: React.FC<StatItem> = ({
  label,
  value,
  change,
  changeType,
}) => {
  const [showMetric, setShowMetric] = useState(false);

  const changeColor =
    changeType === "increase"
      ? "text-green-500 bg-green-500"
      : changeType === "decrease"
      ? "text-red-500 bg-red-500"
      : "text-yellow-400 bg-yellow-400";

  const handleClose = () => {
    setShowMetric(false);
  };

  return (
    <>
      <div
        onClick={() => setShowMetric(true)}
        className="flex items-start gap-4 bg-[#191817] border border-[#252525] rounded-3xl p-4"
      >
        <div className={`w-3 h-3 rounded-full ${changeColor}`} />
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <span className="text-text text-sm">{label}</span>
            <span
              className={`text-xs font-semibold ${changeColor} bg-opacity-20 rounded p-1 px-2`}
            >
              {change}
              {changeType === "increase"
                ? " ↑"
                : changeType === "decrease"
                ? " ↓"
                : " -"}
            </span>
          </div>
          <p className="text-white font-bold text-xl">{value}</p>
        </div>
      </div>
      <DrawerModal
        isOpen={showMetric}
        size="w-full md:w-2/5"
        onClose={handleClose}
      >
        <Metric />
      </DrawerModal>
    </>
  );
};
