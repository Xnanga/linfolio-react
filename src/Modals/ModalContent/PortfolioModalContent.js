import { useState } from "react";
import PortfolioFilter from "./PortfolioFilter";
import PortfolioProjectList from "./PortfolioProjectList";
import portfolioProjectData from "../../Data/portfolio-data";

const PortfolioModalContent = () => {
  const [visibleProjects, setVisibleProjects] = useState(portfolioProjectData);

  const filterProjects = (projectType) => {
    if (projectType === "all") {
      setVisibleProjects(portfolioProjectData);
      return;
    }

    const filteredList = portfolioProjectData.filter((project) => {
      return project.createdWith === projectType;
    });

    setVisibleProjects(filteredList);
  };

  return (
    <section>
      <h1>Personal Portfolio</h1>
      <p>
        Here you'll find some of my favourite personal projects I've worked on -
        alongside links to live demos and source code.
      </p>
      <PortfolioFilter filterProjects={filterProjects} />
      <PortfolioProjectList projectData={visibleProjects} />
    </section>
  );
};

export default PortfolioModalContent;
