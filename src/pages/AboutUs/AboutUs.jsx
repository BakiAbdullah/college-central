import MainHeading from "../../components/MainHeading/MainHeading";
import WrapperContainer from "../../components/Shared/Container/WrapperContainer";
import CoverParallax from "../../components/Shared/CoverParallax/CoverParallax";
import computerOffice from "/computerOffice.jpg";
import research2 from "/research2.jpg";

const AboutUs = () => {
  return (
    <div>
      <CoverParallax img={computerOffice}></CoverParallax>
      <WrapperContainer>
        <MainHeading
          title={"Why choose us"}
          subtitle={"We makes your dream easy."}
        ></MainHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-center ">
          <div>
            <p className="text-justify text-darkGray leading-loose">
              College Central is the commercial enterprise goal is to facilitate
              schools and universities with scholar recruitment throughout all
              streams and degrees. With over one thousand companion schools as
              its clients, College Central has 3K+ particular schools indexed
              on its internet site and gives present day records on admissions,
              front tests, infrastructure, guides and careers. My college
              bookings customised scholar outreach programme cognizant with the
              scholar wishes of nowadays and has garnered training seekers from
              throughout the globe. College Central has assisted them with
              counseling and admission offerings to assist them take admission
              withinside the proper university appropriate to their
              instructional background, skill-set & potential.
              <p>
                scholar wishes of nowadays and has garnered training seekers
                from throughout the globe. College Central has assisted them
                with counseling and admission offerings to assist them take
                admission withinside the proper university appropriate to their
                instructional background, skill-set & potential.
              </p>
            </p>
          </div>
          <div>
            <img src={research2} alt="" />
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};

export default AboutUs;