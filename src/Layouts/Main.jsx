import { Outlet } from "react-router-dom";
import NavBar from "../Shared/Navbar/NavBar";
const Main = () => {
  return (
    <div>
      <NavBar />
      <div className="w-[98%] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
