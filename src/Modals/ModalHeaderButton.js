import styles from "./ModalHeaderButton.module.css";

const ModalHeaderButton = (props) => {
  return (
    <button
      key={props.id}
      className={`${styles["modal-header-button"]} ${
        props.orangeHover && styles["modal-header-button--close"]
      }`}
      onClick={props.buttonAction}
    >
      <img src={props.imgSrc} alt={props.alt} />
    </button>
  );
};

export default ModalHeaderButton;
