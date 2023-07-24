// import { useQuery } from "@tanstack/react-query";
// import MainHeading from "../../../components/MainHeading/MainHeading";
// import WrapperContainer from "../../../components/Shared/Container/WrapperContainer";
// import HomeCollegeCard from "./HomeCollegeCard";
// import Loader from "../../../components/Shared/Loader/Loader";

// const CollegeCard = () => {
//   // Tanstack Query Implementation
//   const {
//     data: colleges = [],
//     isLoading: loading,
//     refetch,
//   } = useQuery({
//     queryKey: ["allcolleges"],
//     // enabled: !loading,
//     queryFn: async () => {
//       const res = await fetch(
//         `${import.meta.env.VITE_API_URL}/allcolleges?limit=3`
//       );
//       return res.json();
//     },
//   });

//   if (loading) {
//     refetch();
//     return <Loader></Loader>;
//   }
//   return (
    
//       <WrapperContainer>
//         <MainHeading
//           title={"Top Colleges"}
//           subtitle={"Explore your dream college."}
//         ></MainHeading>
//         <div className="grid my-12 grid-cols-1 lg:grid-cols-3 lg:gap-10 ">
//           {colleges.map((college) => (
//             <HomeCollegeCard
//               key={college._id}
//               college={college}
//             ></HomeCollegeCard>
//           ))}
//         </div>
//       </WrapperContainer>
    
//   );
// };

// export default CollegeCard;
