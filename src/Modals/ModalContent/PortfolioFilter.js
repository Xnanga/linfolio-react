import styles from "./PortfolioFilter.module.css";

const PortfolioFilter = (props) => {
  const filterButtonHandler = (e) => {
    props.filterProjects(e.target.dataset.filterName);
  };

  return (
    <div className={styles["portfolio-filter"]}>
      <button
        data-filter-name="all"
        className={styles["portfolio-filter__btn"]}
        onClick={filterButtonHandler}
      >
        <img
          className={styles["portfolio-filter__img"]}
          src="/icons/infinite-symbol-icon.svg"
          alt="Infinite Symbol"
        />
      </button>
      <button
        data-filter-name="react"
        className={styles["portfolio-filter__btn"]}
        onClick={filterButtonHandler}
      >
        <img
          className={styles["portfolio-filter__img"]}
          src="/icons/reactjs-logo.svg"
          alt="React Logo"
        />
      </button>
      <button
        data-filter-name="javascript"
        className={styles["portfolio-filter__btn"]}
        onClick={filterButtonHandler}
      >
        <img
          className={styles["portfolio-filter__img"]}
          src="/icons/javascript-logo.svg"
          alt="JavaScript Logo"
        />
      </button>
    </div>
  );
};

export default PortfolioFilter;
