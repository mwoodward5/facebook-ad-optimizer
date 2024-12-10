import { Outlet } from "react-router";
import Header from "./_component/header";

function Main() {
  return (
    <div className="bg-[#191817] text-white h-screen text-sm">
      <Header />
      <Outlet />
    </div>
  );
}

export default Main;
