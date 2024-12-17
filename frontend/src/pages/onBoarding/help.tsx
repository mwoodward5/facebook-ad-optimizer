import { useNavigate } from "react-router";
import Step from "./_component/step";
import { MdOutlineArrowBack } from "react-icons/md";
import { Range } from "react-range";
import { useState } from "react";

const Assistant = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState([75]); // Initial percentage value

  const MIN = 0; // Minimum value
  const MAX = 100; // Maximum value
  const STEP = 1; // Increment step

  return (
    <div className="w-full md:w-1/2 flex flex-col justify-between p-8">
      <Step step={3} />
      <div className="flex flex-col gap-6">
        <h2 className=" text-2xl font-semibold">How much help do you want?</h2>
        <div className="flex flex-col items-center space-y-4 text-white p-4 rounded-lg">
          {/* Slider */}
          <div className="w-full">
            <Range
              values={value}
              step={STEP}
              min={MIN}
              max={MAX}
              onChange={(values) => setValue(values)}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="h-1 w-full bg-white rounded relative"
                  style={props.style}
                >
                  <div
                    className="absolute h-1 bg-primary rounded"
                    style={{
                      width: `${((value[0] - MIN) / (MAX - MIN)) * 100}%`,
                    }}
                  />
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  className="w-12 h-6 rounded-full bg-primary flex items-center text-sm justify-center text-white border-2"
                  style={{
                    ...props.style,
                  }}
                >
                  {value[0]}%
                </div>
              )}
            />
          </div>

          {/* Labels */}
          <div className="flex justify-between w-full text-sm">
            <span>Manual</span>
            <span>Full Automation</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => navigate(-1)}
          className=" bg-transparent border border-primary  py-2 rounded-full hover:bg-orange-600 font-bold px-4"
        >
          <MdOutlineArrowBack className="text-primary" />
        </button>
        <button
          onClick={() => navigate("/onboarding/budget")}
          className="flex-1 bg-primary  py-2 rounded-full hover:bg-orange-600 font-bold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Assistant;
