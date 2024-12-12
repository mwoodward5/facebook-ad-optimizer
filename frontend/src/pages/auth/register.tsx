import IMAGES from "../../assets/images";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className=" relative flex h-screen ">
      {/* Left Section */}
      <div className=" relative w-full  md:w-1/2 flex flex-col justify-center items-center p-8">
        <img
          src={IMAGES.register}
          alt="Placeholder"
          className="rounded-lg shadow-lg w-full h-full object-cover"
        />
        <div className="absolute top-16 left-16">
          <h2 className="text-white text-4xl font-medium mt-4">Some Plain</h2>
          <h2 className="text-white text-4xl font-medium mt-4">
            Text Goes Here
          </h2>
        </div>
      </div>

      {/* Right Section */}
      <div className="absolute md:relative left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 md:translate-y-0 top-0 md:top-auto  bg-background w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-lg ">
          {/* Logo */}
          <h1 className="text-primary text-4xl font-bold mb-4">LOGO</h1>
          <h2 className="text-white text-4xl mt-2">Welcome To AD Ranker AI</h2>

          {/* Form */}
          <form className="mt-8 space-y-5">
            <div>
              <label className="text-text text-sm block mb-1">First Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 rounded-lg border border-[#252525] bg-transparent text-white focus:outline-none focus:ring focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-text text-sm block mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 rounded-lg border border-[#252525] bg-transparent text-white focus:outline-none focus:ring focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-text text-sm block mb-1">Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full px-4 py-2 rounded-lg border border-[#252525] bg-transparent text-white focus:outline-none focus:ring focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-text text-sm block mb-1">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 rounded-lg border border-[#252525] bg-transparent text-white focus:outline-none focus:ring focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-full hover:bg-orange-600"
            >
              Sign Up
            </button>
          </form>

          {/* Links */}
          <p className="text-text text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-primary hover:underline">
              Sign In
            </Link>
          </p>
          <div className="mt-6">
            <div className="flex items-center gap-2">
              <div className="h-[1px] flex-1 bg-[#252525]" />
              <p className="text-text text-sm text-center">or sign up with</p>
              <div className="h-[1px] flex-1 bg-[#252525]" />
            </div>
            <div className="flex flex-col md:flex-row md:justify-center gap-4 mt-4">
              <button className="flex items-center justify-center gap-2 border border-[#252525] bg-transparent text-sm text-white px-4 py-2 rounded-full bg-[#191817]">
                <FcGoogle />
                Sign Up with Google
              </button>
              <button className="flex items-center justify-center gap-2 border border-[#252525] bg-transparent text-sm text-white px-4 py-2 rounded-full bg-[#191817]">
                <FaApple color="white" /> Sign Up with Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
