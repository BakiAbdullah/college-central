import { PulseLoader } from "react-spinners";


const Loader = () => {
  return (
    <div
      className="
      h-[80vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <PulseLoader size={12} color="red" />
    </div>
  );
};

export default Loader;
