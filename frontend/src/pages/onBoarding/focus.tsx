import { useState } from "react";
import Checkbox from "./_component/checkbox";
import Step from "./_component/step";
import { useNavigate } from "react-router";
import { MdOutlineArrowBack } from "react-icons/md";

const Focus = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  return (
    <div className="w-full md:w-1/2 flex flex-col justify-between p-8">
      <div className="flex flex-col items-start">
        <h1 className="text-primary text-4xl font-bold mb-4">LOGO</h1>
        <Step step={2} />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className=" text-2xl font-semibold">What’s your primary focus?</h2>
        {["Increase ROI", "Boost engagement", "Maximize reach"].map((value) => (
          <Checkbox
            label={value}
            checked={selected === value}
            onChange={() => setSelected(value)}
          />
        ))}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => navigate(-1)}
          className=" bg-transparent border border-primary  py-2 rounded-full hover:bg-orange-600 font-bold px-4"
        >
          <MdOutlineArrowBack className="text-primary" />
        </button>
        <button
          onClick={() => navigate("/onboarding/help")}
          className="flex-1 bg-primary  py-2 rounded-full hover:bg-orange-600 font-bold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Focus;
