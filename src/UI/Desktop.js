import styles from "./Desktop.module.css";

const Desktop = (props) => {
  return <main className={styles.desktop}>{props.children}</main>;
};

export default Desktop;
