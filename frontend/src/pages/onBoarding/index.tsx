import { Outlet } from "react-router";
import IMAGES from "../../assets/images";

function OnBoarding() {
  return (
    <div className="bg-background text-white flex h-screen">
      {/* Left Section */}
      <div className=" relative  w-1/2 flex flex-col justify-center items-center p-8">
        <img
          src={IMAGES.onboarding}
          alt="Placeholder"
          className="rounded-lg shadow-lg w-full h-full object-cover"
        />
        <div className="absolute top-16 left-16">
          <h2 className=" text-4xl font-medium mt-4">Some Plain</h2>
          <h2 className=" text-4xl font-medium mt-4">Text Goes Here</h2>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default OnBoarding;
