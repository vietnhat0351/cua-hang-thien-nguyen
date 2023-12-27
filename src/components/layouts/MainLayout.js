import ControlledCarousel from "../ControlledCarousel";
import CustomFooter from "../CustomFooter";
import CustomNavbar from "../CustomNavbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="">
      <ControlledCarousel />
      <CustomNavbar />
      <div className="container">
        <Outlet />
      </div>
      <CustomFooter />
    </div>
  );
};

export default MainLayout;
