import { FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";

const Logo = ({ center }) => {
  return (
    <div>
      <Link
        to="/"
        className={`flex items-center ${
          center ? "justify-center " : "justify-start"
        }`}
      >
        <FaGraduationCap
          className='text-3xl lg:text-6xl me-1 text-white' 
        ></FaGraduationCap>
        <span className="font-extrabold font-archivo text-white text-xl lg:text-4xl">
          College Central
        </span>
      </Link>
    </div>
  );
};

export default Logo;
