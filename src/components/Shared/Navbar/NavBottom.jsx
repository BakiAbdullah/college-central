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
            to="/instructors"
            className={({ isActive }) =>
              isActive
                ? "text-rosered font-semibold border-b-2 border-rosered "
                : "hover:text-rosered border-b-2 border-rosered border-opacity-0 hover:border-opacity-100 text-white font-semibold  duration-300 dark:text-gray-200  mx-1.5 sm:mx-6"
            }
          >
            Instructors
          </NavLink>
          <NavLink
            to="/allClasses"
            className={({ isActive }) =>
              isActive
                ? "text-rosered font-semibold border-b-2 border-rosered "
                : "hover:text-rosered border-b-2 border-rosered border-opacity-0 hover:border-opacity-100 text-white font-semibold  duration-300 dark:text-gray-200  mx-1.5 sm:mx-6"
            }
          >
            Classes
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
          <NavLink
            to="/workshop"
            className={({ isActive }) =>
              isActive
                ? "text-rosered font-semibold border-b-2 border-rosered "
                : "hover:text-rosered border-b-2 border-rosered border-opacity-0 hover:border-opacity-100 text-white font-semibold  duration-300 dark:text-gray-200  mx-1.5 sm:mx-6"
            }
          >
            Workshops
          </NavLink>

          <div className="hidden lg:flex justify-center items-center gap-2 ms-16">
          <FaFacebookSquare className="text-rosered rounded-md text-3xl cursor-pointer bg-white"></FaFacebookSquare>
          <FaTwitterSquare className="text-rosered rounded-md text-3xl cursor-pointer bg-white"></FaTwitterSquare>
          <FaYoutubeSquare className="text-rosered rounded-md text-3xl cursor-pointer bg-white"></FaYoutubeSquare>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavMiddle;
