import { useNavigate } from "react-router";
import Step from "./_component/step";
import { MdOutlineArrowBack } from "react-icons/md";

const Help = () => {
  const navigate = useNavigate();

  return (
    <div className="w-1/2 flex flex-col justify-between p-8">
      <div className="flex flex-col items-start">
        <h1 className="text-primary text-4xl font-bold mb-4">LOGO</h1>
        <Step step={3} />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className=" text-2xl font-semibold">How much help do you want?</h2>
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

export default Help;
