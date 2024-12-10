import React from "react";
import { NavLink } from "react-router";
import IMAGES from "../../assets/images";
import { GoBell } from "react-icons/go";
import { FaCog } from "react-icons/fa";

const navLinks = [
  { name: "Dashboard", path: "/" },
  { name: "Ad Creation", path: "/ad-creation" },
  { name: "Automation Settings", path: "/automation-settings" },
  { name: "Reports & Analytics", path: "/reports-analytics" },
];

const Header: React.FC = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full flex items-center gap-10 p-4 px-8 border-b border-[#252525] bg-[#191817] z-100 ">
        {/* Left Section - Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/logo.png" // Replace with your logo image path
            alt="Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Middle Section - Navigation Links */}

        <nav className="flex space-x-8 flex-1">
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
          {/* Notifications */}
          <button className="relative text-gray-400 hover:text-white">
            <GoBell className="text-lg" />
          </button>

          {/* Settings */}
          <button className="text-gray-400 hover:text-white">
            <FaCog className="text-lg" />
          </button>

          {/* Profile */}
          <div className="relative">
            <img
              src={IMAGES.profile}
              alt="Profile"
              className="w-8 h-8 rounded-full border-2 border-gray-600"
            />
            <button className="absolute right-0 bottom-0 w-2 h-2 bg-gray-300 rounded-full border border-black"></button>
          </div>
        </div>
      </header>
      <div className="h-[70px]" />
    </>
  );
};

export default Header;
