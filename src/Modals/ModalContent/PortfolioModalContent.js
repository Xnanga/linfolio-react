import { useState } from "react";
import PortfolioFilter from "./PortfolioFilter";
import PortfolioProjectList from "./PortfolioProjectList";

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
            A personal portfolio website based on the Ubuntu Linux operating
            system.
          </p>
          <p>This SPA uses interactive modals to display:</p>
          <ul>
            <li>A simple bio with buttons leading to key info and actions</li>
            <li>
              A filterable portfolio of project info with links to live demos
              and Github repos
            </li>
            <li>
              A structured overview of tools, languages, and other applications
            </li>
            <li>
              A simple and clean contact form with built-in field validation
            </li>
          </ul>
          <p>
            This project helped me get more comfortable with the foundations of
            React. This includes simple state management, passing data via
            props, and conditional rendering.
          </p>
        </>
      ),
      image: "/images/linfolio-preview.jpg",
      liveDemoURL: "#",
      sourceCodeURL: "https://github.com/Xnanga/linfolio-react",
      listOrderPriority: 4,
      visible: true,
    },
    {
      projectName: "Simple SEO Report",
      createdWith: "javascript",
      createdWithLogo: "/icons/javascript-logo.svg",
      createdWithLogoAlt: "JavaScript Logo",
      description: (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            imperdiet magna sed urna accumsan, eu vulputate justo pretium.
          </p>
          <p>
            Curabitur varius, eros vehicula sollicitudin ullamcorper, elit nunc
            placerat magna, nec malesuada mi orci nec lectus. Nullam sed
            tincidunt massa. Donec tempor, sapien non viverra convallis, quam
            arcu euismod eros, non hendrerit nibh turpis quis ex.
          </p>
          <p>
            Pellentesque elementum vel lorem eget scelerisque. Praesent vel nibh
            et lacus dictum iaculis. Morbi nec purus condimentum, hendrerit urna
            nec, commodo felis.{" "}
          </p>
        </>
      ),
      image: "/images/listo-preview.jpg",
      liveDemoURL: "#",
      sourceCodeURL: "https://github.com/Xnanga/simple-seo-report",
      listOrderPriority: 2,
      visible: false,
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
      visible: true,
    },
    {
      projectName: "PropertySearchr",
      createdWith: "javascript",
      createdWithLogo: "/icons/javascript-logo.svg",
      createdWithLogoAlt: "JavaScript Logo",
      description: (
        <>
          <p>A clean and modern website for a fictional property business.</p>
          <p>Main features include:</p>
          <ul>
            <li>Fully responsive design for desktop, mobile, and tablet</li>
            <li>
              Sections which pull into view using the Intersection Observer API
            </li>
            <li>Hero banner image slider created completely from scratch</li>
            <li>Interactive carousel of property cards created from scratch</li>
            <li>
              Interactive tabular reviews card, again created from scratch
            </li>
          </ul>
          <p>
            This project was a great opportunity to practice building common
            website components - which these days are usually handled by
            libraries. It also involved some complex uses of SASS which boosted
            my styling skills for future projects.
          </p>
        </>
      ),
      image: "/images/propertysearchr-preview.jpg",
      liveDemoURL: "https://xnanga.github.io/PropertySearchr/",
      sourceCodeURL: "https://github.com/Xnanga/PropertySearchr",
      listOrderPriority: 3,
      visible: true,
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
