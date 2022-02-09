import ModalButton from "../ModalUI/ModalButton";

import styles from "./PortfolioProjectList.module.css";

const PortfolioProjectList = (props) => {
  const highlightActiveButton = () => {};

  const openLink = (url) => {
    window.open(url);
  };

  return (
    <div className={styles["portfolio-project-list"]}>
      {props.projectData.map((project) => {
        return (
          <div
            key={Math.random()}
            className={styles["portfolio-project-list__project"]}
          >
            <img
              className={styles["portfolio-project-list__project-logo"]}
              src={project.createdWithLogo}
              alt={project.createdWithLogoAlt}
            />
            <div className={styles["portfolio-project-list__preview"]}>
              <img src={project.image} alt={project.projectName} />
            </div>
            <div className={styles["portfolio-project-list__project-info"]}>
              <h2>{project.projectName}</h2>
              {project.description}
              <div
                className={styles["portfolio-project-list__button-container"]}
              >
                <ModalButton
                  id={Math.random()}
                  buttonAction={() => openLink(project.liveDemoURL)}
                  buttonHighlight={highlightActiveButton}
                  buttonText={"Live Demo"}
                />
                <ModalButton
                  id={Math.random()}
                  buttonAction={() => openLink(project.sourceCodeURL)}
                  buttonHighlight={highlightActiveButton}
                  buttonText={"Source Code"}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioProjectList;
