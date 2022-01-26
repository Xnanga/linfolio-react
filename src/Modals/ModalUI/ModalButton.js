import styles from "./ModalButton.module.css";

const ModalButton = (props) => {
  return (
    <button
      id={props.id}
      className={styles["modal-button"]}
      onClick={props.buttonAction}
    >
      {props.buttonText}
    </button>
  );
};

export default ModalButton;
