import ModalButton from "../ModalUI/ModalButton";

import styles from "./PortfolioProjectList.module.css";

const PortfolioProjectList = (props) => {
  // Figure out how to get correct URL linked with button press
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
              <p>{project.description}</p>
            </div>
            <div className={styles["portfolio-project-list__button-container"]}>
              <ModalButton
                id={Math.random()}
                buttonAction={openLink}
                buttonText={"Live Demo"}
              />
              <ModalButton
                id={Math.random()}
                buttonAction={openLink}
                buttonText={"Source Code"}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioProjectList;
