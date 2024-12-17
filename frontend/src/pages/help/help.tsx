import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

function MainHelp() {
  return (
    <div className="my-8 space-y-8">
      <div className="text-2xl font-medium">How Can We Help You Today?</div>
      <div className="flex items-center gap-2 border border-[#252525] rounded-full p-2 w-1/2 md:w-1/5">
        <div>
          <CiSearch className="text-lg" />
        </div>
        <input
          className=" bg-transparent focus:outline-none"
          placeholder="Search"
        />
      </div>
      <div className="bg-[#1B1B1B] space-y-4 border border-[#252525] rounded-3xl p-6">
        <div className="text-xl font-medium">Get Staarted</div>
        <div className="border-b border-[#252525] py-3">
          <div className="flex items-center justify-between mb-2">
            <div className="font-medium">What is Ad ranker</div>
            <IoIosArrowDown />
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur. Eget lacus arcu sit nec quam
            suspendisse. Eget quisque nisl hendrerit pharetra amet. Id facilisis
            lectus sed massa tortor amet aliquam posuere. Urna cursus ultricies
            duis purus.
          </div>
        </div>
        <div className="border-b border-[#252525] py-3">
          <div className="flex items-center justify-between mb-2">
            <div className="font-medium">Question</div>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="border-b border-[#252525] py-3">
          <div className="flex items-center justify-between mb-2">
            <div className="font-medium">Question</div>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="border-b border-[#252525] py-3">
          <div className="flex items-center justify-between mb-2">
            <div className="font-medium">Question</div>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="border-b border-[#252525] py-3">
          <div className="flex items-center justify-between mb-2">
            <div className="font-medium">Question</div>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHelp;
