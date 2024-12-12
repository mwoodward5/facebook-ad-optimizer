import { Link } from "react-router";
import IMAGES from "../../../../assets/images";
import { FaRegUser } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";

interface Props {
  isOpen: boolean;
  onClose?: () => void;
}
function Menu({ isOpen, onClose }: Props) {
  return (
    isOpen && (
      <>
        <div className="absolute flex flex-col gap-3  top-10 right-0 z-20 bg-background w-52 p-4 rounded-lg border border-[#252525]">
          <div className="flex items-center gap-2 border-b border-[#252525]  pb-4">
            <img
              src={IMAGES.profile}
              alt="Profile"
              className="w-8 h-8 rounded-full "
            />
            <div>
              <div className="font-medium">Samuel Richard</div>
              <div className="text-xs">exampleAmail.com</div>
            </div>
          </div>
          <Link to="#" className="flex items-center gap-2">
            <FaRegUser className="text-md" />
            Profile
          </Link>
          <Link to="/help" className="flex items-center gap-2">
            <IoIosHelpCircleOutline className="text-lg" />
            Help
          </Link>
          <Link
            to="#"
            className="flex items-center gap-2 border-t border-[#252525] pt-2"
          >
            <IoLogOutOutline className="text-lg" />
            Logout
          </Link>
        </div>
        <div onClick={onClose} className="fixed inset-0 " />
      </>
    )
  );
}

export default Menu;
