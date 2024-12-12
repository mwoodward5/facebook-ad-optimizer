import { NavLink } from "react-router";
import { navs } from ".";

function Mobile() {
  return (
    <div className="flex flex-col  ">
      <div className="text-2xl font-medium p-6">Settings</div>

      {navs.map((nav) => (
        <NavLink
          to={nav.path}
          className={({ isActive }) =>
            `text-lg p-6 whitespace-nowrap border-b border-[#252525] ${
              isActive ? "border-l-2 border-primary" : "text-text"
            }`
          }
          key={nav.path}
        >
          {nav.name}
        </NavLink>
      ))}
    </div>
  );
}

export default Mobile;
