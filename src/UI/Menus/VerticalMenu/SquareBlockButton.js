import styles from "./SquareBlockButton.module.css";

const SquareBlockButton = (props) => {
  return (
    <button
      id={props.id}
      className={styles["square-block-button"]}
      onClick={props.buttonAction}
    >
      <img
        className={styles["square-block-button__icon"]}
        src={props.iconURL}
        alt={props.altText}
      />
      <span className={styles["square-block-button__label"]}>{props.id}</span>
    </button>
  );
};

export default SquareBlockButton;
