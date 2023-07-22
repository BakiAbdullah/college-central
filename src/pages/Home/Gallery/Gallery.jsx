import MainHeading from "../../../components/MainHeading/MainHeading";
import WrapperContainer from "../../../components/Shared/Container/WrapperContainer";


const Gallery = () => {
  return (
    <WrapperContainer>
      <MainHeading
        title={"Photo Gallery"}
        subtitle={"College graduates"}
      ></MainHeading>
      <div className="grid grid-cols-3 grid-rows-2 gap-2 lg:gap-4">
        <div className="col-span-1 row-span-1">
          <div className="relative h-full overflow-hidden rounded-md group">
            <div className="relative h-full">
              <img
                className="object-cover h-full cursor-pointer transition ease-linear transform group-hover:scale-110 duration-500"
                src="/grads.jpg"
                alt="Image 2"
              />
              <div className="absolute inset-0 bg-purple-900 opacity-0 group-hover:opacity-50 transition-opacity duration-500">
                <span className="flex justify-center items-center h-full text-4xl font-bold text-white">Oxford Graduates</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-2">
          <div className="relative h-full overflow-hidden rounded-md group">
            <div className="relative">
              <img
                className="object-cover h-full cursor-pointer transition ease-linear transform group-hover:scale-110 duration-500"
                src="/grads2.jpg"
                alt="Image 2"
              />
              <div className="absolute inset-0 bg-purple-900 opacity-0 group-hover:opacity-50 transition-opacity duration-500">
               <span className="flex justify-center items-center font-bold text-4xl h-full text-white">Havard Graduates</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1">
          <div className="relative h-full overflow-hidden rounded-md group">
            <div className="relative h-full">
              <img
                className="object-cover h-full cursor-pointer transition ease-linear transform group-hover:scale-110 duration-500"
                src="/grads3.jpg"
                alt="Image 2"
              />
              <div className="absolute inset-0 bg-purple-900 opacity-0 group-hover:opacity-50 transition-opacity duration-500">
               <span className="flex justify-center items-center font-bold text-4xl h-full text-white">Stanford Graduates</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1">
          <div className="relative h-full overflow-hidden rounded-md group">
            <div className="relative h-full">
              <img
                className="object-cover h-full cursor-pointer transition ease-linear transform group-hover:scale-110 duration-500"
                src="/grads4.jpg"
                alt="Image 2"
              />
              <div className="absolute inset-0 bg-purple-900 opacity-0 group-hover:opacity-50 transition-opacity duration-500">
               <span className="flex justify-center items-center font-bold text-4xl h-full text-white">Cambridge Graduates</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1">
          <div className="relative h-full overflow-hidden rounded-md group">
            <div className="relative h-full">
              <img
                className="object-cover h-full cursor-pointer transition ease-linear transform group-hover:scale-110 duration-500"
                src="/grads5.jpg"
                alt="Image 2"
              />
              <div className="absolute inset-0 bg-purple-900 opacity-0 group-hover:opacity-50 transition-opacity duration-500">
                <span className="flex justify-center items-center font-bold text-4xl h-full text-white">Berkely Graduates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Gallery;