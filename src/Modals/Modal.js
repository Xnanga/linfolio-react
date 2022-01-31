import styles from "./Modal.module.css";
import ModalHeaderButton from "./ModalHeaderButton";

const Modal = (props) => {
  const dragWindowHandler = () => {
    // NEED TO DO SOME RESEARCH
  };

  const buttonData = {
    closeButton: {
      id: Math.random(),
      buttonName: "close",
      buttonImgSrc: "/icons/cancel-circle-icon.png",
      buttonAction: props.closeModal,
      orangeHover: true,
      buttonIconAltText: "a cross icon for closing a window",
    },
    minimiseButton: {
      id: Math.random(),
      buttonName: "minimise",
      buttonImgSrc: "/icons/minus-icon.png",
      buttonAction: props.closeModal,
      orangeHover: false,
      buttonIconAltText: "a minus icon for minimising a window",
    },
  };

  return (
    <div
      className={`${
        props.modalSize === "small"
          ? `${styles.modal} ${styles["modal--small"]}`
          : styles.modal
      }`}
    >
      <header className={styles["modal__header"]}>
        <span className={styles["modal__header-text"]}>{props.modalTitle}</span>
        <div className={styles["modal__header-buttons"]}>
          <ModalHeaderButton
            key={buttonData.closeButton.id}
            orangeHover={buttonData.closeButton.orangeHover}
            buttonAction={buttonData.closeButton.buttonAction}
            imgSrc={buttonData.closeButton.buttonImgSrc}
            alt={buttonData.closeButton.alt}
          />
        </div>
      </header>
      <main className={styles["modal__body"]}>
        <div className={styles["modal__body-content"]}>
          {props.modalContent}
        </div>
      </main>
    </div>
  );
};

export default Modal;
