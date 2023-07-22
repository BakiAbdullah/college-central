import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-98px)]">
          <Outlet />
        </div>
        <Footer />
        <ScrollToTop></ScrollToTop>
      </div>
    </div>
  );
};

export default Main;
