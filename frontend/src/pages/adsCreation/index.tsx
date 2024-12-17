import React from "react";
import { NavLink, Outlet } from "react-router";

const AdsCreation: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto bg-[#191817] border border-[#252525] rounded-3xl md:mt-8 p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        {[
          { name: "Facebook", path: "/ad-creation" },
          { name: "Craigslist", path: "craigslist" },
        ].map((nav) => (
          <NavLink
            to={nav.path}
            className={({ isActive }) =>
              `py-1 px-4 flex-1 md:flex-none text-center ${
                isActive
                  ? "border-2 rounded-full text-primary border-primary"
                  : ""
              }`
            }
            end
          >
            {nav.name}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default AdsCreation;
