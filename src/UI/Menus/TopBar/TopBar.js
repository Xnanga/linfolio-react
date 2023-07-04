import Clock from "./Clock";

import styles from "./TopBar.module.css";

const TopBar = (props) => {
  return (
    <header className={styles["top-bar"]}>
      <span className={styles["top-bar__logo"]}>Linfolio
        <span className={styles["top-bar__version"]}>V1.1</span>
      </span>
      <Clock />
    </header>
  );
};

export default TopBar;
