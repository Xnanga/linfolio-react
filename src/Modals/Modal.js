import styles from "./Modal.module.css";
import ModalHeaderButton from "./ModalHeaderButton";

const Modal = (props) => {
  const closeWindowHandler = () => {
    console.log("Window Closed");
  };

  const minimiseWindowHandler = () => {
    console.log("Window Minimised");
  };

  const dragWindowHandler = () => {
    // NEED TO DO SOME RESEARCH
  };

  const buttonData = {
    closeButton: {
      id: Math.random(),
      buttonName: "close",
      buttonImgSrc: "/icons/cancel-circle-icon.png",
      buttonAction: closeWindowHandler,
      orangeHover: true,
      buttonIconAltText: "a cross icon for closing a window",
    },
    minimiseButton: {
      id: Math.random(),
      buttonName: "minimise",
      buttonImgSrc: "/icons/minus-icon.png",
      buttonAction: minimiseWindowHandler,
      orangeHover: false,
      buttonIconAltText: "a minus icon for minimising a window",
    },
  };

  return (
    <div className={styles.modal}>
      <header className={styles["modal__header"]}>
        <span className={styles["modal__header-text"]}>
          Portfolio Bio - Linfolio
        </span>
        <div className={styles["modal__header-buttons"]}>
          <ModalHeaderButton
            key={buttonData.minimiseButton.id}
            orangeHover={buttonData.minimiseButton.orangeHover}
            buttonAction={buttonData.minimiseButton.buttonAction}
            imgSrc={buttonData.minimiseButton.buttonImgSrc}
            alt={buttonData.minimiseButton.alt}
          />
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
          <p>This is where the content will go.</p>
        </div>
      </main>
    </div>
  );
};

export default Modal;
