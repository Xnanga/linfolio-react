import { useState } from "react";
import PortfolioFilter from "./PortfolioFilter";
import PortfolioProjectList from "./PortfolioProjectList";

import styles from "./PortfolioModalContent.module.css";

const PortfolioModalContent = () => {
  const projectData = [
    {
      projectName: "Linfolio",
      createdWith: "react",
      createdWithLogo: "/icons/reactjs-logo.svg",
      createdWithLogoAlt: "React Logo",
      description: (
        <>
          <p>
            A kan-ban style productivity tool use to keep track of project
            actions - inspired by Trello.
          </p>
          <p>
            This webapp allows you to create lists, add/remove cards in those
            lists, and set due dates and priority levels. It also makes use of
            LocalStorage to ensure your cards persist across sessions.
          </p>
          <p>
            I learned a lot about manipulating data structures and taking an OOP
            approach in this project.
          </p>
        </>
      ),
      image: "/images/listo-preview.jpg",
      liveDemoURL: "#",
      sourceCodeURL: "https://github.com/Xnanga/linfolio-react",
      listOrderPriority: 4,
    },
    {
      projectName: "Simple SEO Report",
      createdWith: "javascript",
      createdWithLogo: "/icons/javascript-logo.svg",
      createdWithLogoAlt: "JavaScript Logo",
      description:
        "Using the Google Analytics API, this tool generates a simple KPI report for use by SEO professionals.",
      image: "/images/listo-preview.jpg",
      liveDemoURL: "#",
      sourceCodeURL: "https://github.com/Xnanga/simple-seo-report",
      listOrderPriority: 2,
    },
    {
      projectName: "Listo",
      createdWith: "javascript",
      createdWithLogo: "/icons/javascript-logo.svg",
      createdWithLogoAlt: "JavaScript Logo",
      description: (
        <>
          <p>
            A kan-ban style productivity tool use to keep track of project
            actions - inspired by Trello.
          </p>
          <p>
            This webapp allows you to create lists, add/remove cards in those
            lists, and set due dates and priority levels. It also makes use of
            LocalStorage to ensure your cards persist across sessions.
          </p>
          <p>
            I learned a lot about manipulating data structures and taking an OOP
            approach in this project.
          </p>
        </>
      ),

      image: "/images/listo-preview.jpg",
      liveDemoURL: "https://xnanga.github.io/listo/",
      sourceCodeURL: "https://github.com/Xnanga/listo",
      listOrderPriority: 1,
    },
    {
      projectName: "PropertySearchr",
      createdWith: "javascript",
      createdWithLogo: "/icons/javascript-logo.svg",
      createdWithLogoAlt: "JavaScript Logo",
      description:
        "A modern property business homepage aiming to wow visitors with a sleek design and interactive content.",
      image: "/images/listo-preview.jpg",
      liveDemoURL: "https://xnanga.github.io/PropertySearchr/",
      sourceCodeURL: "https://github.com/Xnanga/PropertySearchr",
      listOrderPriority: 3,
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState(projectData);

  const filterProjects = (projectType) => {
    if (projectType === "all") {
      setVisibleProjects(projectData);
      return;
    }

    const filteredList = projectData.filter((project) => {
      return project.createdWith === projectType;
    });

    setVisibleProjects(filteredList);
  };

  return (
    <>
      <h1>Portfolio</h1>
      <p>
        Here you'll find some of the biggest personal projects I've worked on -
        alongside links to live demos and source code.
      </p>
      <p>You can use the buttons below to filter by tech used:</p>
      <PortfolioFilter filterProjects={filterProjects} />
      <PortfolioProjectList projectData={visibleProjects} />
    </>
  );
};

export default PortfolioModalContent;
