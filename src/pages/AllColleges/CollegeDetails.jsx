import LazyLoad from "react-lazy-load";
import { useLoaderData } from "react-router-dom";
import WrapperContainer from "../../components/Shared/Container/WrapperContainer";

const CollegeDetails = () => {
  const collegeData = useLoaderData();
  console.log(collegeData);

  const {
    collegeImage,
    collegeName,
    collegeRating,
    admissionDate,
    // events,
    researchHistory,
    // sports,
  } = collegeData;
  return (
    <WrapperContainer>
      <h2 className="font-extrabold text-2xl lg:text-5xl text-center my-12 text-darkPurple ">
        {collegeName}
      </h2>
      <div className="flex bg-darkPurple text-white lg:flex-row flex-col text-gray-700 shadow-md">
        <div className="relative lg:w-3/5 flex-shrink-0  overflow-hidden rounded-r-none bg-white text-gray-700">
          <div className="border-8 border-white absolute top-5 left-4 right-4 bottom-5"></div>
          <img
            src={collegeImage}
            alt="image"
            className="lg:h-[450px] h-[250px] w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block  text-base text-rosered font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {collegeName}{" "}
            <span className="text-xs text-white">(Addmission Going On!) </span>
          </h6>
          <p className="mb-3 block  text-base font-normal leading-relaxed text-gray-700 antialiased">
            <span className="text-rosered font-semibold">
              Addmission Date:{" "}
            </span>
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

      <div>sdfsd</div>
    </WrapperContainer>
  );
};

export default CollegeDetails;
