import Avatar from "./Avatar";
// import NavMiddle from "./NavMiddle";
import "./Navbar.css";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Button from "../../Button/Button";
import { useAuth } from "../../../hooks/useAuth";
import NavMiddle from "./NavBottom";

const Navbar = () => {
  const { user, logOut } = useAuth();

  return (
    <div>
      <header className="bg-darkPurple">
        <div className="container mx-auto px-4 py-4 flex lg:flex-row flex-col items-center gap-5 lg:gap-0 lg:justify-around justify-between">
          <Logo center={true}></Logo>
          {/* <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-slate-50 rounded-md hidden xl:flex items-center justify-center">
            <div className="relative parent z-50">
              <a
                href="#"
                className="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-50 space-x-2"
              >
                <span className="uppercase text-darkGray font-bold text-sm mr-4">
                  Our Courses
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 fill-current pt-1 text-darkPurple "
                  viewBox="0 0 24 24"
                >
                  <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                </svg>
              </a>
              <ul className="child transition duration-700 md:absolute top-full right-0 md:w-48 bg-darkPurple text-white font-semibold md:shadow-lg md:rounded-b ">
                <li>
                  <a
                    href="#"
                    className="flex px-4 py-3 hover:bg-chocolate duration-500"
                  >
                    Art Education
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex px-4 py-3 hover:bg-chocolate duration-500"
                  >
                    General Fine Arts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex px-4 py-3 hover:bg-chocolate duration-500"
                  >
                    Clay Studio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex px-4 py-3 hover:bg-chocolate duration-500"
                  >
                    Wood Arts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex px-4 py-3 hover:bg-chocolate duration-500"
                  >
                    Glass Studio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex px-4 py-3 hover:bg-chocolate duration-500"
                  >
                    Painting Studio
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:flex hidden items-center space-x-2 bg-white shadow-sm py-1 px-2 rounded-full">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-lightGray cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <input
                className="outline-none caret-darkPurple"
                type="text"
                placeholder="I'm Searching for.."
              />
            </div>
          </div> */}
          <NavMiddle></NavMiddle>

          <nav className="flex items-center justify-center space-x-4">
            {user ? (
              <>
                <ul className="ml-auto xl:w-48 flex items-center justify-end">
                  <Link to="/dashboard/home">
                    <button className="hover:bg-white relative hover:text-darkGray shadow-sm pl-14 overflow-hidden bg-darkPurple text-white duration-300 rounded-full font-bold px-8 py-2">
                      Dashboard
                      <span
                        title={`${user ? user?.displayName : "Not Found"}`}
                        className="absolute -left-2 top-1 px-3"
                      >
                        <Avatar></Avatar>
                      </span>
                    </button>
                  </Link>
                </ul>

                <div
                  title="Logout"
                  className="cursor-pointer shadow-md flex items-center justify-center rounded-full p-2 bg-white"
                  onClick={logOut}
                >
                  <RiLogoutCircleRLine
                    className="text-rosered font-extrabold hover:animate-pulse duration-200"
                    size={24}
                  ></RiLogoutCircleRLine>
                </div>
              </>
            ) : (
              <Link to="/login">
                <Button label={"Sign In"} hover={true} fontbig={true}></Button>
              </Link>
            )}
          </nav>
        </div>

        {/* <hr className="text-gray bg-gray h-[1px]" /> */}
      </header>
    </div>
  );
};

export default Navbar;
