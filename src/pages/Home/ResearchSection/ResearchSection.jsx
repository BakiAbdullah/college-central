import MainHeading from "../../../components/MainHeading/MainHeading";
import WrapperContainer from "../../../components/Shared/Container/WrapperContainer";
import img from '/research.jpg'
import img2 from '/research2.jpg'
import img3 from '/research3.jpg'

const ResearchSection = () => {
  // Replace this with your actual research paper data
  const researchPapers = [
    {
      id: 1,
      image: img2,
      title: "Neuron netwoks and machine learning",
      author: "Jhon Doe (Havard College)",
      link: "https://www.hindawi.com/journals/ijg/2017/6120980/",
    },
    {
      id: 2,
      image: img,
      title: "Artificial Intelligence in Healthcare",
      author: "Emily Brown",
      link: "https://ieeexplore.ieee.org/document/7835722",
    },
    {
      id: 3,
      image: img3,
      title: "Advancements in Quantum Computing",
      author: "Robert Johnson",
      link: "https://store.computer.org/csdl/proceedings-article/icde/2021/918400a229/1uGXOjgGLoA",
    },
    // Add more research papers as needed
  ];
  return (
    <WrapperContainer>
      <MainHeading
        title={"Recommended"}
        subtitle={"Research Papers"}
      ></MainHeading>
      <section className="bg-gray-100 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchPapers.map((paper) => (
            <div
              key={paper.id}
              className="bg-amber-50 p-6 rounded-lg shadow-md"
            >
              <div>
                <img className="object-cover" src={paper.image} alt="" />
              </div>
              <h3 className="text-xl font-semibold mt-5 mb-1">{paper.title}</h3>
              <p className=" text-md mb-4 text-darkPurple">
                By {paper.author}
              </p>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-900 hover:bg-teal-950 duration-300 text-white font-semibold px-4 py-2 rounded-md inline-block"
              >
                Read Paper
              </a>
            </div>
          ))}
        </div>
      </section>
    </WrapperContainer>
  );
};

export default ResearchSection;