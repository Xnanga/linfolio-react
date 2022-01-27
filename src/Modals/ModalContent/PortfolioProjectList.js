import styles from "./PortfolioProjectList.module.css";

const PortfolioProjectList = (props) => {
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
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioProjectList;
