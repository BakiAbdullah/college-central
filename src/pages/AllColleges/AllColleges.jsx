import { useQuery } from "@tanstack/react-query";
import MainHeading from "../../components/MainHeading/MainHeading";
import WrapperContainer from "../../components/Shared/Container/WrapperContainer";
import Loader from "../../components/Shared/Loader/Loader";
import CoverParallax from "../../components/Shared/CoverParallax/CoverParallax";
import versityImg from '/versity.jpg'
import AllCollegeCard from "./AllCollegeCard";

const AllColleges = () => {
  // Tanstack Query Implementation
  const { data: classes = [], isLoading: loading, refetch } = useQuery({
    queryKey: ["allcolleges"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/allcolleges?limit=6`);
      return res.json();
    },
  });

  if (loading) {
    refetch()
    return <Loader></Loader>;
  }
  return (
    <div>
      <div>
        <CoverParallax img={versityImg}></CoverParallax>

        <WrapperContainer>
          <MainHeading
            title={"All Colleges"}
            subtitle={"Discover your dream college."}
          ></MainHeading>
          <div className="grid my-24 grid-cols-1 lg:grid-cols-2 lg:gap-20">
            {classes.map((college) => (
              <AllCollegeCard
                key={college._id}
                college={college}
              ></AllCollegeCard>
            ))}
          </div>
        </WrapperContainer>
      </div>
    </div>
  );
};

export default AllColleges;