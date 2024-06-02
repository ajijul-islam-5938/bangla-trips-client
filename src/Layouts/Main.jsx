import { Outlet } from "react-router-dom";
import NavBar from "../Shared/Navbar/NavBar";
import Footer from "../Shared/Footer/Footer";
const Main = () => {
  return (
    <div>
      <NavBar />
      <div className="w-[98%] mx-auto">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Main;
