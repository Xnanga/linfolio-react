import PortfolioFilter from "./PortfolioFilter";
import PortfolioProjectList from "./PortfolioProjectList";

import styles from "./PortfolioModalContent.module.css";

const PortfolioModalContent = () => {
  const projectData = [
    {
      projectName: "Linfolio",
      createdWith: "React",
      createdWithLogo: "/icons/reactjs-logo.svg",
      createdWithLogoAlt: "React Logo",
      description:
        "This is my Ubuntu Linux-inspired portfolio website made in React.",
      image: "/images/listo-preview.jpg",
      liveDemoURL: "LIVE-DEMO-URL",
      sourceCodeURL: "SOURCE-CODE-URL",
      listOrderPriority: 1,
    },
    {
      projectName: "Simple SEO Report",
      createdWith: "JavaScript",
      createdWithLogo: "/icons/javascript-logo.svg",
      createdWithLogoAlt: "JavaScript Logo",
      description:
        "Using the Google Analytics API, this tool generates a simple KPI report for use by SEO professionals.",
      image: "/images/listo-preview.jpg",
      liveDemoURL: "LIVE-DEMO-URL",
      sourceCodeURL: "SOURCE-CODE-URL",
      listOrderPriority: 2,
    },
    {
      projectName: "Listo",
      createdWith: "JavaScript",
      createdWithLogo: "/icons/javascript-logo.svg",
      createdWithLogoAlt: "JavaScript Logo",
      description:
        "A kan-ban style productivity tool use to keep track of project actions.",
      image: "/images/listo-preview.jpg",
      liveDemoURL: "LIVE-DEMO-URL",
      sourceCodeURL: "SOURCE-CODE-URL",
      listOrderPriority: 3,
    },
    {
      projectName: "PropertySearchr",
      createdWith: "JavaScript",
      createdWithLogo: "/icons/javascript-logo.svg",
      createdWithLogoAlt: "JavaScript Logo",
      description:
        "A modern property business homepage aiming to wow visitors with a sleek design and interactive content.",
      image: "/images/listo-preview.jpg",
      liveDemoURL: "LIVE-DEMO-URL",
      sourceCodeURL: "SOURCE-CODE-URL",
      listOrderPriority: 4,
    },
  ];

  return (
    <>
      <h1>Portfolio</h1>
      <PortfolioFilter />
      <PortfolioProjectList projectData={projectData} />
    </>
  );
};

export default PortfolioModalContent;
