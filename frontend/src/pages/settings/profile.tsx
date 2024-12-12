import { CiEdit } from "react-icons/ci";
import IMAGES from "../../assets/images";

function Profile() {
  return (
    <div className="space-y-8">
      <div className="text-lg">Profile Information</div>
      <div className="flex items-center gap-4">
        <img
          src={IMAGES.profile}
          alt="Profile"
          className="w-14 h-14 rounded-full "
        />
        <button className="flex items-center justify-center gap-2 bg-transparent text-sm text-primary px-4 py-2 rounded-full ">
          Edit Image
          <CiEdit />
        </button>
      </div>

      <div>
        <label className="text-text text-sm block mb-2">Name</label>
        <input
          type="text"
          placeholder="Enter Name"
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
        <label className="text-text text-sm block mb-1">Phone</label>
        <input
          type="text"
          placeholder="1234567890"
          className="w-full px-4 py-2 rounded-lg border border-[#252525] bg-transparent text-white focus:outline-none focus:ring focus:ring-primary"
        />
      </div>

      <div>
        <label className="text-text text-sm block mb-1">Old Password</label>
        <input
          type="password"
          placeholder=""
          className="w-full px-4 py-2 rounded-lg border border-[#252525] bg-transparent text-white focus:outline-none focus:ring focus:ring-primary"
        />
      </div>

      <div>
        <label className="text-text text-sm block mb-1">New Password</label>
        <input
          type="password"
          placeholder=""
          className="w-full px-4 py-2 rounded-lg border border-[#252525] bg-transparent text-white focus:outline-none focus:ring focus:ring-primary"
        />
      </div>

      <div className={` flex md:justify-end`}>
        <button className="bg-primary w-full md:w-auto text-white font-medium px-8 py-2 rounded-full">
          Save
        </button>
      </div>
    </div>
  );
}

export default Profile;
