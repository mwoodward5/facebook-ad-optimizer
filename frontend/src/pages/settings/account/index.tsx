import { useState } from "react";
import IMAGES from "../../../assets/images";
import Modal from "../../_component/modal";
import AccountReadiness from "./_component/accountReadiness";

function Account() {
  const [showReadiness, setShowReadiness] = useState(false);
  return (
    <div className="space-y-8">
      <div className="text-lg">Account Management</div>
      <div className="flex p-4 items-center justify-between gap-4 border border-[#252525] rounded-lg">
        <div className="flex items-center gap-4">
          <img
            src={IMAGES.profile}
            alt="Account"
            className="w-14 h-14 rounded-full "
          />
          <div className="">
            <h2 className="text-lg">Samuel Rechard</h2>
            <p className="">example@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 text-sm text-green-500 px-4 py-2">
          <div className="h-3 w-3 rounded-full bg-green-500 " />
          Active
        </div>
      </div>

      <div className="border border-[#252525] p-4 rounded-lg ">
        <div className="text-lg mb-8">Account Info</div>
        <div className="">Name</div>
        <div className="text-lg mb-8">Samuel Rechard</div>
        <div className="">Email</div>
        <div className="text-lg mb-8">example@gmail.com</div>
        <div className="">Phone Number</div>
        <div className="text-lg mb-8">+1234567890</div>
      </div>

      <div className={` flex md:justify-end`}>
        <button
          onClick={() => setShowReadiness(true)}
          className="bg-primary w-full md:w-auto text-white font-medium px-8 py-2 rounded-full"
        >
          Text Account
        </button>
      </div>
      <Modal isOpen={showReadiness} onClose={() => setShowReadiness(false)}>
        <AccountReadiness />
      </Modal>
    </div>
  );
}

export default Account;
