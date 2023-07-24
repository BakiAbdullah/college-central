import { Link } from "react-router-dom";


const HomeCollegeCard = ({ college }) => {
  const {
    _id,
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
      <div className="bg-white text-darkGray shadow-lg rounded-lg overflow-hidden my-10">
        <div className="p-4 py-2">
          <p className="pt-4 text-lg text-rosered uppercase text-left font-bold">
            {collegeName}
          </p>
          <p className="text-gray-600 text-sm text-justify mt-1">
            <span>{researchHistory.slice(0, 150)}...</span>
          </p>
          <p className="flex items-center gap-1 text-gray-600 text-sm text-justify mt-1">
            <span className="font-bold"> College Rating:</span>
            <span className="bg-rosered text-white text-xs rounded-md h-5 w-8 flex items-center justify-center">
              {" "}
              {collegeRating}
            </span>
          </p>
        </div>
        <img className="h-56 w-full object-cover mt-2" src={collegeImage} />
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
          <span className="text-sm">
            <span className="font-bold">Addmission:</span> {admissionDate}
          </span>

          <Link to={`/allcolleges/${_id}`}>
            <button className="mt-1 my-4 border hover:bg-darkPurple hover:text-white duration-200 tansition ease-linear p-2 shadow-2xl text-sm rounded-md text-darkPurple font-bold hover:bg-gray-800">
              More Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeCollegeCard;