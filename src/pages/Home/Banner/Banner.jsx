
import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { useQuery } from "@tanstack/react-query";
import MainHeading from "../../../components/MainHeading/MainHeading";
import WrapperContainer from "../../../components/Shared/Container/WrapperContainer";
import HomeCollegeCard from "../CollegeCard/HomeCollegeCard";
import Loader from "../../../components/Shared/Loader/Loader";

const Banner = () => {
  const [collegeData, setCollegeData] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Search college by Name
  const handleCollegeSearch = () => {
    fetch(`${import.meta.env.VITE_API_URL}/searchCollege/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setCollegeData(data);
      });
  };


  // Tanstack Query Implementation
  const {
    data: colleges = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["allcolleges"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/allcolleges?limit=3`
      );
      return res.json();
    },
  });

  if (loading) {
    refetch();
    return <Loader></Loader>;
  }

  return (
    <>
      <div className="relative bg-darkPurple">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-8 font-extrabold lg:text-4xl tracking-tight text-white  sm:leading-none">
              Welcome to the College Central Stay
              <br className="hidden md:block" />
              Revolution, Book{" "}
              <span className="relative inline-block px-2">
                <div className="absolute inset-0 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative text-rosered">Online!</span>
              </span>
            </h2>
            <div className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
              <input
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search Colleges..."
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 text-darkGray transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
              />
              <button
                onClick={handleCollegeSearch}
                className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-rosered focus:outline-none"
              >
                <HiSearch className="me-1 text-xl"></HiSearch> Search
              </button>
            </div>
            <p className="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">
              Open Doors to Opportunity, Where Dreams Take Flight. Search and
              Find Your College.
            </p>
            <a
              href="/"
              aria-label="Scroll down"
              className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-rosered hover:border-rosered hover:shadow hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </a>
          </div>
          {/* <img src="/public/graduates.png" alt="" /> */}
        </div>
      </div>

      <WrapperContainer>
        <MainHeading
          title={"Top Colleges"}
          subtitle={"Explore your dream college."}
        ></MainHeading>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 ">
          {collegeData.length > 0
            ? collegeData.map((college) => (
                <HomeCollegeCard key={college._id} college={college} />
              ))
            : colleges.map((college) => (
                <HomeCollegeCard key={college._id} college={college} />
              ))}
        </div>
      </WrapperContainer>
    </>
  );
};

export default Banner;
