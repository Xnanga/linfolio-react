import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={styles.modal}>
      <header className={styles["modal__header"]}>
        <span className={styles["modal__header-text"]}>
          Portfolio Bio - Linfolio
        </span>
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
