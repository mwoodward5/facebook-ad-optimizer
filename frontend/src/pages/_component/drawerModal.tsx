import { useEffect } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

interface Props {
  children: React.ReactNode;
  size?: string;
  isOpen: boolean;
  onClose: () => void;
}

const DrawerModal = ({ children, size, isOpen, onClose }: Props) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full z-30  transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }  ${size || "w-screen md:w-full"}`}
      >
        <div
          className={`relative overflow-y-auto scrollbar-hide h-full p-6 bg-[#111010] transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } `}
        >
          <div
            onClick={onClose}
            className="bg-[#191817] border mb-4 border-[#252525] rounded-lg p-2 cursor-pointer w-10"
          >
            <MdOutlineKeyboardDoubleArrowRight className="text-lg" />
          </div>
          {children}
        </div>
      </div>
      {isOpen && <div className="fixed inset-0 bg-black opacity-70" />}
    </>
  );
};

export default DrawerModal;
