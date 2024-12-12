import { useNavigate } from "react-router";
import Step from "./_component/step";
import { MdOutlineArrowBack } from "react-icons/md";

const Budget = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full md:w-1/2 flex flex-col justify-between p-8">
      <div className="flex flex-col items-start">
        <h1 className="text-primary text-4xl font-bold mb-4">LOGO</h1>
        <Step step={4} />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className=" text-2xl font-semibold">
          What’s your campaign budget?
        </h2>
        <div>
          <label className="text-text text-sm block mb-1">Daily budget</label>
          <input
            type="email"
            placeholder="$100"
            className="w-full px-4 py-2 rounded-lg border border-[#252525] bg-transparent text-white focus:outline-none focus:ring focus:ring-primary"
          />
        </div>
        <div className="text-primary">
          You can reach up to 10,000 users daily!
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => navigate(-1)}
          className=" bg-transparent border border-primary rounded-full hover:bg-orange-600 font-bold px-4"
        >
          <MdOutlineArrowBack className="text-primary" />
        </button>
        <button
          onClick={() => navigate("/")}
          className="flex-1 bg-primary  py-2 rounded-full hover:bg-orange-600 font-bold"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Budget;
