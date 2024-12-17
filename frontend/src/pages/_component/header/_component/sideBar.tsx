import { Link } from "react-router";
import IMAGES from "../../../../assets/images";
import { FaCog } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
function Sidebar({ isOpen, onClose }: Props) {
  return (
    <div
      className={`absolute flex flex-col justify-between pb-[130px] top-[60px] bg-background right-0 md:hidden h-screen space-y-3 w-full md:w-80 bg-dark transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } z-20`}
    >
      <div>
        <div className="flex items-center gap-2 border-b border-[#252525]  p-4">
          <img
            src={IMAGES.profile}
            alt="Profile"
            className="w-10 h-10 rounded-full "
          />
          <div>
            <div className="font-medium">Samuel Richard</div>
            <div className="text-xs">exampleAmail.com</div>
          </div>
        </div>
        <Link onClick={onClose} to="/" className="flex items-center gap-2 p-4">
          Dashboard
        </Link>
        <Link
          onClick={onClose}
          to="/ad-creation"
          className="flex items-center gap-2 p-4 border-t border-[#252525] pt-2"
        >
          Ad Creation
        </Link>
        <Link
          onClick={onClose}
          to="/automation"
          className="flex items-center gap-2 p-4 border-t border-[#252525] pt-2"
        >
          Automation Settings
        </Link>
        <Link
          onClick={onClose}
          to="/reports-analytics"
          className="flex items-center gap-2 p-4 border-y border-[#252525] pt-2"
        >
          Reports & Analytics
        </Link>
      </div>
      <div>
        <Link
          onClick={onClose}
          to="/settings/mobile"
          className="flex items-center border-t border-[#252525] gap-2 p-4"
        >
          <FaCog className="text-lg" />
          Settings
        </Link>
        <Link
          to="#"
          className="flex items-center gap-2 border-y border-[#252525] pt-2 p-4"
        >
          <IoLogOutOutline className="text-lg" />
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
