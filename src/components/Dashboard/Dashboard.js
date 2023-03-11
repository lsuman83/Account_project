import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
export const Dashboard = () => {
  return (
    <div className="h-screen flex flex-cols">
      <Navbar className="basis-1/4" />
      <Outlet />
    </div>
  );
};
