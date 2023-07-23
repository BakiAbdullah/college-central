// import Avatar from "./Avatar";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Button from "../../Button/Button";
import { useAuth } from "../../../hooks/useAuth";
import NavMiddle from "./NavBottom";
import { useEffect } from "react";

const Navbar = () => {
  const { user, logOut } = useAuth();

   useEffect(() => {
     const header = document.getElementById("navbar");

     // Function to handle scroll event
     const handleScroll = () => {
       // Calculate the scroll position
       const scrollPosition = window.scrollY || window.pageYOffset;

       if (scrollPosition > 0) {
         header.style.opacity = "0.9";
       } else {
         header.style.opacity = "1";
       }
     };

     window.addEventListener("scroll", handleScroll);

     // Clean up the event listener when the component is unmounted
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);

  return (
    <>
      <header
        id="navbar"
        className="bg-darkPurple sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4 flex lg:flex-row flex-col items-center gap-5 lg:gap-0 lg:justify-around justify-between">
          <Logo center={true}></Logo>

          <NavMiddle></NavMiddle>

          <nav className="flex items-center justify-center space-x-2">
            {user ? (
              <>
                <ul className="ml-auto xl:w-48 flex items-center justify-end">
                  <button className="bg-rosered relative overflow-hidden text-white duration-300 hover:rounded-md rounded-md rounded-ss-3xl font-bold px-5 py-2">
                    {user ? user?.displayName.slice(0, 15) : "Not Found"}
                    {/* <span
                      title={`${user ? user?.displayName : "Not Found"}`}
                      className="absolute -left-2 top-1 px-3"
                    >
                      <Avatar></Avatar>
                    </span> */}
                  </button>
                </ul>

                <div
                  className="cursor-pointer flex items-center justify-center rounded-md rounded-se-3xl hover:rounded-md duration-300 p-2 bg-white"
                  onClick={logOut}
                >
                  <span className="text-darkPurple px-2 font-extrabold ">
                    {" "}
                    Logout
                  </span>
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
    </>
  );
};

export default Navbar;
