import { NavLink, Outlet } from "react-router";
import Chat from "./_component/chat";

function Help() {
  return (
    <div className="max-w-5xl mx-auto bg-[#191817] border border-[#252525] rounded-3xl md:mt-8 p-4 md:p-8">
      <div className="flex items-center gap-4">
        {[
          { name: "Help", path: "/help" },
          { name: "Contact", path: "contact" },
        ].map((nav) => (
          <NavLink
            to={nav.path}
            className={({ isActive }) =>
              `p-3 flex-1 md:flex-none text-center ${
                isActive ? "border-b-2 text-primary border-primary" : ""
              }`
            }
            end
          >
            {nav.name}
          </NavLink>
        ))}
      </div>
      <Outlet />
      <Chat />
    </div>
  );
}

export default Help;
