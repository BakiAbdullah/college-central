import { Link } from "react-router-dom"; 
import { FaGhost } from "react-icons/fa";

const ErrorPage = () => {
 
  return (
    <>
      <main className="bg-teal-800 text-creamYellow min-h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-5xl md:text-9xl font-bold">
            4
            <span className="inline-block animate-bounce text-creamYellow">
              <FaGhost></FaGhost>
            </span>
            4
          </h1>
          <h2 className="text-3xl capitalize md:text-5xl font-bold mb-4">
           page not found
          </h2>
          <p className="text-xl md:text-2xl">
            Sorry, the page you are looking for cannot be accessed
          </p>
          <button className="px-4 mt-8 inline py-2 leading-5 shadow-xl text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue font-bold bg-teal-700 hover:bg-teal-600">
            <Link to="/">Back to Homepage</Link>
          </button>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
