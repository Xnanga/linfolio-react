import styles from "./PortfolioFilter.module.css";

const PortfolioFilter = () => {
  return (
    <div className={styles["portfolio-filter"]}>
      <button
        className={styles["portfolio-filter__btn"]}
        onClick={() => console.log("Button Clicked")}
      >
        <img
          className={styles["portfolio-filter__img"]}
          src="#"
          alt="All Projects"
        />
      </button>
      <button
        className={styles["portfolio-filter__btn"]}
        onClick={() => console.log("Button Clicked")}
      >
        <img
          className={styles["portfolio-filter__img"]}
          src="/icons/reactjs-logo.svg"
          alt="React Logo"
        />
      </button>
      <button
        className={styles["portfolio-filter__btn"]}
        onClick={() => console.log("Button Clicked")}
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
