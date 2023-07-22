import { NavLink } from "react-router-dom";
// import { BsWechat } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const NavMiddle = () => {
  return (
    <div>
      <nav className="bg-darkPurple shadow-sm dark:bg-gray-800">
        <div className="container flex items-center gap-2 lg:gap-0 justify-center p-6 lg:text-lg text-xs mx-auto text-gray-600 capitalize dark:text-gray-300">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-rosered font-semibold border-b-2 border-rosered "
                : "hover:text-rosered border-b-2 border-rosered border-opacity-0 hover:border-opacity-100 text-white font-semibold  duration-300 dark:text-gray-200  mx-1.5 sm:mx-6"
            }
          >
            home
          </NavLink>
          <NavLink
            to="/colleges"
            className={({ isActive }) =>
              isActive
                ? "text-rosered font-semibold border-b-2 border-rosered "
                : "hover:text-rosered border-b-2 border-rosered border-opacity-0 hover:border-opacity-100 text-white font-semibold  duration-300 dark:text-gray-200  mx-1.5 sm:mx-6"
            }
          >
            Colleges
          </NavLink>
          <NavLink
            to="/admission"
            className={({ isActive }) =>
              isActive
                ? "text-rosered font-semibold border-b-2 border-rosered "
                : "hover:text-rosered border-b-2 border-rosered border-opacity-0 hover:border-opacity-100 text-white font-semibold  duration-300 dark:text-gray-200  mx-1.5 sm:mx-6"
            }
          >
            Admission
          </NavLink>
          <NavLink
            to="/mycollege"
            className={({ isActive }) =>
              isActive
                ? "text-rosered font-semibold border-b-2 border-rosered "
                : "hover:text-rosered border-b-2 border-rosered border-opacity-0 hover:border-opacity-100 text-white font-semibold  duration-300 dark:text-gray-200  mx-1.5 sm:mx-6"
            }
          >
            My College
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-rosered font-semibold border-b-2 border-rosered "
                : "hover:text-rosered border-b-2 border-rosered border-opacity-0 hover:border-opacity-100 text-white font-semibold  duration-300 dark:text-gray-200  mx-1.5 sm:mx-6"
            }
          >
            About us
          </NavLink>

          <div className="hidden lg:flex justify-center items-center gap-2 ms-16">
            <FaFacebookSquare className="text-white bg-darkPurple rounded-md text-3xl cursor-pointer"></FaFacebookSquare>
            <FaTwitterSquare className="text-white bg-darkPurple rounded-md text-3xl cursor-pointer"></FaTwitterSquare>
            <FaYoutubeSquare className="text-white bg-darkPurple rounded-md text-3xl cursor-pointer"></FaYoutubeSquare>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavMiddle;
