import Clock from "./Clock";

import styles from "./TopBar.module.css";

const TopBar = (props) => {
  return (
    <header className={styles["top-bar"]}>
      <span className={styles["top-bar__logo"]}>Linfolio</span>
      <Clock />
    </header>
  );
};

export default TopBar;
