import { Link } from "react-router";
import IMAGES from "../../assets/images";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/onboarding/connect");
  };
  return (
    <div className="flex h-screen ">
      {/* Left Section */}
      <div className=" relative  w-1/2 flex flex-col justify-center items-center p-8">
        <img
          src={IMAGES.login}
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
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-lg ">
          {/* Logo */}
          <h1 className="text-primary text-4xl font-bold mb-4">LOGO</h1>
          <h2 className="text-white text-4xl mt-2">Welcome Back!</h2>
          <div>The perfect time to take control of your financial journey.</div>

          {/* Form */}
          <form className="mt-8 space-y-5" onSubmit={handleLogin}>
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
              <div className="font-bold text-primary mt-2 cursor-pointer">
                Forgot Password
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-full hover:bg-orange-600"
            >
              Login
            </button>
          </form>

          <p className="text-text text-sm text-center mt-4">
            Don't have an account?{" "}
            <Link to="/auth/register" className="text-primary hover:underline">
              Sign Up
            </Link>
          </p>

          <div className="mt-6">
            <div className="flex items-center gap-2">
              <div className="h-[1px] flex-1 bg-[#252525]" />
              <p className="text-text text-sm text-center">or sign up with</p>
              <div className="h-[1px] flex-1 bg-[#252525]" />
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <button className="flex items-center gap-2 border border-[#252525] bg-transparent text-sm text-white px-4 py-2 rounded-full bg-[#191817]">
                <FcGoogle />
                Sign Up with Google
              </button>
              <button className="flex items-center gap-2 border border-[#252525] bg-transparent text-sm text-white px-4 py-2 rounded-full bg-[#191817]">
                <FaApple color="white" />
                Sign Up with Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
