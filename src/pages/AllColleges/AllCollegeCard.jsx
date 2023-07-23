import "./AllCollegeCard.css";

const AllCollegeCard = ({ college }) => {
  const {
    collegeImage,
    collegeName,
    collegeRating,
    admissionDate,
    // events,
    researchHistory,
    // sports,
  } = college;

  return (
    <>
      <div className="grid place-items-center mt-10 bg-gray-900 group cursor-pointer">
        <div className="bg-white border-2 border-darkPurple rounded-md">
          <div className="md:flex px-4 leading-none max-w-4xl">
            <div className="flex-none">
              <img
                src={collegeImage}
                alt="pic"
                className="h-80 w-96 lg:w-72 object-center object-cover rounded-md shadow-2xl transform -translate-y-6 group-hover:-translate-y-8 transition-transform ease-linear duration-300"
              />
            </div>

            <div className="flex-col text-gray-300">
              <p className="pt-4 text-xl ms-3 text-rosered uppercase font-bold">
                {collegeName}
              </p>

              <hr className="hr-text" data-content="" />
              <div className="text-md flex justify-between px-4 my-2">
                <span className="font-">Addmission: {admissionDate}</span>
              </div>
              <p className="hidden md:block px-4 my-4 text-sm text-justify">
                <span>{researchHistory.slice(0, 250)}...</span>
              </p>

              <p className="flex items-center gap-1 text-sm font-bold px-4 my-2">
                Rating:{" "}
                <span className="bg-rosered text-white rounded-full h-8 w-8 flex items-center justify-center">
                  {" "}
                  {collegeRating}
                </span>
              </p>
            </div>
          </div>
          <div className="flex justify-end items-center px-4 mb-4 w-full">
            <div className="flex">
              <button className="mt-1 bg-darkPurple p-2 shadow-2xl text-sm rounded-md text-white font-bold hover:bg-gray-800">
                More Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCollegeCard;
