import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import IMAGES from "../../../assets/images";
import { GoBell } from "react-icons/go";
import { FaCog } from "react-icons/fa";
import Notification from "./_component/notification";
import Menu from "./_component/menu";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import Sidebar from "./_component/sideBar";

const navLinks = [
  { name: "Dashboard", path: "/" },
  { name: "Ad Creation", path: "/ad-creation" },
  { name: "Automation Settings", path: "/automation" },
  { name: "Reports & Analytics", path: "/reports-analytics" },
];

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 w-full flex items-center justify-between md:justify-self-auto gap-10 p-4 md:px-8 border-b border-[#252525] bg-[#191817] z-30 ">
        {/* Left Section - Logo */}
        <div className="flex items-center gap-3">
          <IoMdMenu
            className="text-lg md:hidden"
            onClick={() => setShowSidebar(!showSidebar)}
          />
          <Sidebar isOpen={showSidebar} onClose={() => setShowSidebar(false)} />
          <Link to="/" className="flex items-center space-x-4">
            <img
              src="/logo.png" // Replace with your logo image path
              alt="Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Middle Section - Navigation Links */}

        <nav className="md:flex space-x-8 flex-1 hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium p-2 px-4 rounded-full ${
                  isActive ? "text-white bg-[#2E1D15] " : "text-[#BDBEC0]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Section - Icons & Profile */}
        <div className="flex items-center space-x-4">
          <FaRegCircleQuestion
            onClick={() => navigate("/help")}
            className="md:hidden text-lg text-text"
          />
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotification(!showNotification)}
              className="relative text-text hover:text-white"
            >
              <GoBell className="text-lg" />
            </button>
            <Notification
              isOpen={showNotification}
              onClose={() => setShowNotification(false)}
            />
          </div>
          {/* Settings */}
          <button
            onClick={() => navigate("/settings/profile")}
            className="text-gray-400 hover:text-white hidden md:block"
          >
            <FaCog className="text-lg" />
          </button>
          {/* Profile */}
          <div className="relative hidden md:block">
            <div
              onClick={() => setShowMenu(true)}
              className="flex items-center gap-2"
            >
              <img
                src={IMAGES.profile}
                alt="Profile"
                className="w-8 h-8 rounded-full border-2 border-gray-600 cursor-pointer"
              />
              <IoMdArrowDropdown />
            </div>
            <Menu isOpen={showMenu} onClose={() => setShowMenu(false)} />
          </div>
        </div>
      </header>
      <div className="h-[70px]" />
    </>
  );
};

export default Header;
