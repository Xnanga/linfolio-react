import ModalIconList from "../ModalUI/ModalIconList";

import styles from "./StackModalContent.module.css";

const StackModalContent = () => {
  const webDevListData = [
    {
      imgSrc: "/icons/html5-logo.svg",
      imgAlt: "The HTML5 Logo",
      linkUrl: "#",
    },
    {
      imgSrc: "/icons/css3-logo.svg",
      imgAlt: "The CSS3 Logo",
      linkUrl: "#",
    },
    {
      imgSrc: "/icons/sass-logo.svg",
      imgAlt: "The SASS Logo",
      linkUrl: "#",
    },
    {
      imgSrc: "/icons/javascript-logo.svg",
      imgAlt: "The JavaScript Logo",
      linkUrl: "#",
    },
    {
      imgSrc: "/icons/reactjs-logo.svg",
      imgAlt: "The React Logo",
      linkUrl: "#",
    },
  ];

  return (
    <>
      <h1>My Toolbox</h1>
      <p>
        From creating interactive webapps from scratch to analysing data for
        online campaigns, I've built up strong experience across a range of
        tools and languages.
      </p>
      <h2>Frontend Web Development</h2>
      <p>
        React is now my go-to for SPAs and projects requiring a complex UI.
        Otherwise I'm happy using plain old vanilla JavaScript with libraries
        like Plotly.js and Discord.js.
      </p>
      <ModalIconList listData={webDevListData} />
      <h2>Search Engine Optimisation</h2>
      <p>
        Technical SEO is my foundation. I've used a ton of useful tools and
        programs over the years to crawl and analyse websites, looking for ways
        to maximise ranking potential in Google Search.
      </p>
      <ModalIconList />
      <h2>Content Management Systems</h2>
      <p>
        From Magento to WordPress, I've worked with and have managed plenty of
        different CMSs - each with their own obstacles and challenges.
      </p>
      <ModalIconList />
      <h2>Data Analysis & Tracking</h2>
      <p>
        Data-driven planning, strategy, and development is core to my way of
        working. I'm always looking for new useful data sources and creative
        ways of communicating that data to stakeholders.
      </p>
      <ModalIconList />
    </>
  );
};

export default StackModalContent;
