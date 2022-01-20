import Clock from "../../Clock";

import styles from "./TopBar.module.css";

const TopBar = (props) => {
  return (
    <header className={styles["top-bar"]}>
      <Clock />
    </header>
  );
};

export default TopBar;
