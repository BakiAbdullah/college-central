

const MainHeading = ({ title, subtitle }) => {
  return (
    <div className="md:w-4/12 relative lg:w-4/12 mt-6 lg:mt-12 lg:mb-12 text-left">
      <p className="text-rosered before:border-2 font-poppins uppercase lg:text-xl  mb-2">
        <span className="ms-2">{title}</span>
      </p>
      <h3 className="lg:text-2xl text-2xl uppercase font-poppins text-darkPurple font-bold mb-12">
        {subtitle}
      </h3>
    </div>
  );
};

export default MainHeading;
