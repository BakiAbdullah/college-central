import Banner from "./Banner/Banner";
// import CollegeCard from "./CollegeCard/CollegeCard";
import Gallery from "./Gallery/Gallery";
import ResearchSection from "./ResearchSection/ResearchSection";
import ReviewSection from "./ReviewSection/ReviewSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <CollegeCard></CollegeCard> */}
      <Gallery></Gallery>
      <ResearchSection></ResearchSection>
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default Home;