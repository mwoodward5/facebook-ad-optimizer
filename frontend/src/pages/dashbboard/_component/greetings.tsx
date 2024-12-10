import { PiMoon } from "react-icons/pi";
import { GoRocket } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
function Greetings() {
  return (
    <div className="flex items-center justify-between px-8 p-4">
      <div className="">
        <div className="flex items-center gap-2">
          <h2 className=" text-2xl font-semibold">Good Evening, Samuel!</h2>
          <PiMoon className="text-xl" />
        </div>
        <div>The perfect time to take control of your financial journey.</div>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 border border-primary bg-transparent text-sm text-primary px-4 py-2 rounded-full ">
          <GoRocket className="text-lg" />
          Optimize All Campaigns
        </button>
        <button className="flex items-center gap-2 border border-primary text-sm text-white px-4 py-2 rounded-full bg-primary">
          <FaPlus />
          Post Ad
        </button>
      </div>
    </div>
  );
}

export default Greetings;
