import { Outlet } from "react-router";

function Auth() {
  return (
    <div className="bg-background text-white">
      <Outlet />
    </div>
  );
}

export default Auth;
