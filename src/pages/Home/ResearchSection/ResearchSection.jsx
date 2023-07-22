import MainHeading from "../../../components/MainHeading/MainHeading";
import WrapperContainer from "../../../components/Shared/Container/WrapperContainer";

const ResearchSection = () => {
  // Replace this with your actual research paper data
  const researchPapers = [
    {
      id: 1,
      title: "Title of Research Paper 1",
      author: "Author 1",
      link: "https://example.com/paper1",
    },
    {
      id: 2,
      title: "Title of Research Paper 2",
      author: "Author 2",
      link: "https://example.com/paper2",
    },
    {
      id: 3,
      title: "Title of Research Paper 3",
      author: "Author 3",
      link: "https://example.com/paper3",
    },
    // Add more research papers as needed
  ];
  return (
    <WrapperContainer>
      <MainHeading
        title={"Fact finding"}
        subtitle={"Research Papers"}
      ></MainHeading>
      <section className="bg-gray-100 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchPapers.map((paper) => (
            <div key={paper.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">{paper.title}</h3>
              <p className="text-gray-600 mb-4">By {paper.author}</p>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md inline-block"
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