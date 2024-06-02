import { Outlet } from "react-router-dom";
import NavBar from "../Shared/Navbar/NavBar";
import Sidebar from "../Pages/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-1 md:grid-cols-8 my-[62px]">
        <div className="grid-cols-1 md:col-span-2 border">
            <Sidebar/>
        </div>
        <div className="md:col-span-6">
            <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
