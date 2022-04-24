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
      projectName: "Yu-Gi-Oh! Deckbuilder",
      createdWith: "react",
      createdWithLogo: "/icons/reactjs-logo.svg",
      createdWithLogoAlt: "React Logo",
      description: (
        <>
          <p>A deckbuilder SPA created for the Yu-Gi-Oh! trading card game.</p>
          <p>This tool allows users to:</p>
          <ul>
            <li>Search for any card in the TCG and view all its key info</li>
            <li>
              Search for, filter, sort, and bookmark cards to easily find what
              you're looking for
            </li>
            <li>
              Add cards into the deck hub to build custom main and extra decks
            </li>
            <li>Export your decks to XLSX sheets for later use</li>
            <li>Save your deck and bookmarks until your next visit</li>
          </ul>
          <p>
            This project vastly improved my confidence with using public APIs,
            file export libraries, and custom hooks. I also found manipulating
            large datasets based on user inputs to be a great way to practice
            working with data structures that are closely tied with the UI.
          </p>
        </>
      ),
      image: "/images/ygo-preview.jpg",
      liveDemoURL: "https://shiny-fox-d1c43e.netlify.app/",
      sourceCodeURL: "https://github.com/Xnanga/ygo-deckbuilder",
      listOrderPriority: 1,
      visible: true,
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
      listOrderPriority: 2,
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
