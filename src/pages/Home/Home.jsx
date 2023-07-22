import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import ResearchSection from "./ResearchSection/ResearchSection";
import ReviewSection from "./ReviewSection/ReviewSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ResearchSection></ResearchSection>
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default Home;