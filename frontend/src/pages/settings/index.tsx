import { NavLink, Outlet } from "react-router";

export const navs = [
  { name: "Account Management", path: "/settings/account" },
  { name: "Edit Profile", path: "/settings/profile" },
  { name: "Subscription Details", path: "/settings/subscription" },
  { name: "Notification settings", path: "/settings/notification" },
  { name: "Data Privacy ", path: "/settings/privacy" },
];

function Settings() {
  return (
    <div className="max-w-5xl mx-auto bg-[#191817] border border-[#252525] rounded-3xl md:mt-8 p-8">
      <div className="text-2xl font-medium hidden md:block">Settings</div>
      <div className="text-text hidden md:block">
        Edit your personal information.
      </div>
      <div className="flex mt-12">
        <div className="md:flex flex-col flex-1 space-y-8 gap-4 hidden ">
          {navs.map((nav) => (
            <NavLink
              to={nav.path}
              className={({ isActive }) =>
                `text-lg px-4 whitespace-nowrap ${
                  isActive ? "border-l-2 border-primary" : "text-text"
                }`
              }
              key={nav.path}
            >
              {nav.name}
            </NavLink>
          ))}
        </div>
        <div className="flex-1 md:flex-[3]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Settings;
