import { HiOutlineUsers } from "react-icons/hi2";
import { LuImage } from "react-icons/lu";
import { FaDollarSign } from "react-icons/fa";

interface Props {
  step: number;
}

const tabs = [
  { name: "Goal & Audience", icon: <HiOutlineUsers /> },
  { name: "Design Your Ad", icon: <LuImage /> },
  { name: "Budget", icon: <FaDollarSign /> },
];

const Tabs: React.FC<Props> = ({ step }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {tabs.map((tab, index) => (
        <div className="flex flex-col gap-2 items-center">
          <div className="hidden md:flex flex-col items-center">
            {tab.icon}
            <div className="">{tab.name}</div>
          </div>
          <div className="relative w-full">
            <div
              key={index}
              className={`absolute left-0 h-1 w-1/2 rounded-full ${
                index < step ? " bg-primary" : ""
              }`}
            />
            <div
              key={index}
              className={`absolute left-0 h-1 w-full rounded-full ${
                index + 1 < step ? " bg-primary" : "bg-white  opacity-20"
              } `}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
