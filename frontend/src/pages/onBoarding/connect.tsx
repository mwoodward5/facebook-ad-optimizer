import { useNavigate } from "react-router";
import Step from "./_component/step";
import { FaFacebook } from "react-icons/fa";

const Connect = () => {
  const navigate = useNavigate();
  return (
    <div className="w-1/2 flex flex-col justify-between p-8">
      <div className="flex flex-col items-start">
        <h1 className="text-primary text-4xl font-bold mb-4">LOGO</h1>
        <Step step={1} />
      </div>
      <div className="flex flex-col ">
        <h2 className=" text-2xl font-semibold">Connect Ad Account</h2>
        <p className="text-gray-400 w-3/4  mt-2">
          Connect your Facebook Ad account to start managing campaigns
          seamlessly.
        </p>
        <button className="flex items-center justify-center mt-8 gap-2 border border-[#252525] bg-transparent text-sm  px-4 py-2 rounded-full bg-[#191817]">
          <FaFacebook className="text-[#1877F2] text-lg bg-white rounded-full" />
          Connect My Facebook Account
        </button>
      </div>
      <button
        onClick={() => navigate("/onboarding/focus")}
        className="w-full bg-primary  py-2 rounded-full hover:bg-orange-600 font-bold"
      >
        Next
      </button>
    </div>
  );
};

export default Connect;
