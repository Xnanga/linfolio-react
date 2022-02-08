import { useState } from "react";

import styles from "./PortfolioFilter.module.css";

const PortfolioFilter = (props) => {
  const [activeFilterButton, setActiveFilterButton] = useState("all");

  const filterButtonHandler = (e) => {
    setActiveFilterButton(e.target.dataset.filterName);
    props.filterProjects(e.target.dataset.filterName);
  };

  const activeButtonHighlight = (buttonName) => {
    if (activeFilterButton === buttonName) {
      return `${styles["portfolio-filter__btn"]} ${styles["portfolio-filter__btn--highlighted"]}`;
    } else {
      return `${styles["portfolio-filter__btn"]}`;
    }
  };

  return (
    <div className={styles["portfolio-filter"]}>
      <button
        data-filter-name="all"
        className={activeButtonHighlight("all")}
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
        className={activeButtonHighlight("react")}
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
        className={activeButtonHighlight("javascript")}
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
