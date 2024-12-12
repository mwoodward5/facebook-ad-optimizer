import { useState } from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

function Hint() {
  const [show, setShow] = useState(true);
  return (
    show && (
      <div className="fixed bottom-10 right-10 bg-primary p-4 rounded-3xl space-y-4 max-w-sm w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium text-base">
            <HiOutlineLightBulb className="text-xl" />
            Campaign Insights
          </div>
          <IoMdClose
            className="text-xl cursor-pointer "
            onClick={() => setShow(false)}
          />
        </div>
        <div>Reallocate $100 from Campaign 1 to Campaign 2 for better ROI.</div>
        <div className="flex items-center gap-4">
          <button className="p-2 px-4 rounded-full border border-white">
            Do it for me!
          </button>
          <div>Remind me later.</div>
        </div>
      </div>
    )
  );
}

export default Hint;
