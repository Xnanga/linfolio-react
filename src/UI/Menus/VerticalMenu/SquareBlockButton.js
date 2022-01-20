import styles from "./SquareBlockButton.module.css";

const SquareBlockButton = (props) => {
  return (
    <button className={styles["square-block-button"]} key={props.id}>
      <img
        className={styles["square-block-button__icon"]}
        src={props.iconURL}
        alt={props.altText}
      />
    </button>
  );
};

export default SquareBlockButton;
