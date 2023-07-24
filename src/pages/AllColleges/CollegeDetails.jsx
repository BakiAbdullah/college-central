import LazyLoad from "react-lazy-load";
import { useLoaderData } from "react-router-dom";
import WrapperContainer from "../../components/Shared/Container/WrapperContainer";
import MainHeading from "../../components/MainHeading/MainHeading";
import soccerImg from "/soccer.jpg";
import eventsImg from "/events.jpg";

const CollegeDetails = () => {
  const collegeData = useLoaderData();
  console.log(collegeData);

  const {
    collegeImage,
    collegeName,
    collegeRating,
    admissionDate,
    events,
    researchHistory,
    sports,
  } = collegeData;
  return (
    <WrapperContainer>
      <h2 className="font-extrabold text-2xl lg:text-5xl text-center my-12 text-darkPurple ">
        {collegeName}
      </h2>
      <div className="flex bg-darkPurple text-white lg:flex-row flex-col text-gray-700 shadow-md">
        <div className="relative lg:w-3/5 flex-shrink-0  overflow-hidden rounded-r-none bg-white text-gray-700">
          <div className="border-8 border-white absolute top-5 left-4 right-4 bottom-5"></div>
          <LazyLoad>
            <img
              src={collegeImage}
              alt="image"
              className="lg:h-[500px] h-[250px] w-full object-cover"
            />
          </LazyLoad>
        </div>
        <div className="p-6">
          <h6 className="mb-4 block  text-base text-rosered font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {collegeName}{" "}
            <span className="text-xs text-white capitalize">
              | Admission Going On!{" "}
            </span>
          </h6>
          <p className="mb-3 block  text-base font-normal leading-relaxed text-gray-700 antialiased">
            <span className="text-rosered font-semibold">Admission Date: </span>
            {admissionDate}
          </p>
          <p className="mb-8 block  text-base font-normal leading-relaxed text-gray-700 antialiased">
            <span className="text-rosered font-semibold">
              Research History:{" "}
            </span>
            {researchHistory}
          </p>

          <div className="flex justify-between">
            <div className="flex justify-center items-center gap-1">
              <span className="font-bold"> College Rating:</span>
              <span className="bg-rosered text-white text-xs rounded-md h-5 w-8 flex items-center justify-center">
                {" "}
                {collegeRating}
              </span>
            </div>
            <a className="inline-block" href="#">
              <button
                className="flex select-none items-center gap-2 rounded-lg py-2 px-4 text-base text-center align-middle font-bold uppercase text-white transition-all bg-rosered hover:bg-rose-700 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Book Now
              </button>
            </a>
          </div>
        </div>
      </div>

      <MainHeading
        title={"Events & Sports"}
        subtitle={"Admission Going On!"}
      ></MainHeading>

      <div>
        <div className="flex justify-center gap-10">
          <div className="bg-gray-400 w-1/2">
            <div
              className="flex flex-col justify-between w-full sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer"
              style={{
                backgroundImage: `url(${soccerImg})`,
                width: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex justify-between items-center mt-5 ml-4 pr-8">
                <div className="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">
                  Sports Facilities
                </div>
              </div>
              <div className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
                <h3 className="text-xl font-bold pb-2">
                  {collegeName} - Sports Facilities
                </h3>
                <p className="truncate text-gray-500 text-sm">
                  <span className="font-bold uppercase">Our Sports:</span>{" "}
                  {sports.map((sport, i) => {
                    return <span key={i}>{sport}, </span>;
                  })}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-400 w-1/2">
            <div
              className="flex flex-col justify-between w-full sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer"
              style={{
                backgroundImage: `url(${eventsImg})`,
                width: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex justify-between items-center mt-5 ml-4 pr-8">
                <div className="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">
                  Cultural Events
                </div>
              </div>
              <div className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
                <h3 className="text-xl font-bold pb-2">
                  {collegeName} - Cultural Events
                </h3>
                <p className="truncate text-gray-500 text-sm">
                  <span className="font-bold uppercase">Events:</span>{" "}
                  {events.map((event, i) => {
                    return <span key={i}>{event}, </span>;
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default CollegeDetails;
