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
            Suggestions
          </div>
          <IoMdClose
            className="text-xl cursor-pointer "
            onClick={() => setShow(false)}
          />
        </div>
        <ul className="mt-2 space-y-2 ml-4 list-disc">
          <li>Switch creative to ImageX; CTR expected to improve by 15%.</li>
          <li>
            Increase daily budget to $50; reach is expected to expand by 20%.
          </li>
          <li>
            Pause ads during weekends; saves $200 in low-return impressions.
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button className="p-2 px-4 rounded-full border border-white">
            Optimize All
          </button>
        </div>
      </div>
    )
  );
}

export default Hint;
