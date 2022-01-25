import { useEffect, useState } from "react";
import Modal from "../Modals/Modal";

import styles from "./Desktop.module.css";

const Desktop = (props) => {
  const [currentVisibleModal, setCurrentVisibleModal] = useState(
    props.modalVisibilityHandler
  );

  const closeModal = () => setCurrentVisibleModal("");

  useEffect(() => {
    setCurrentVisibleModal(props.modalVisibilityHandler);
    // props.modalChangedFlag ensures props changes
  }, [props]);

  return (
    <main className={styles.desktop}>
      {currentVisibleModal === "Bio" && (
        <Modal modalTitle="Bio - Linfolio" closeModal={closeModal} />
      )}
      {currentVisibleModal === "Portfolio" && (
        <Modal
          modalTitle="Project Portfolio - Linfolio"
          closeModal={closeModal}
        />
      )}
      {currentVisibleModal === "Stack" && (
        <Modal modalTitle="Tech Stack - Linfolio" closeModal={closeModal} />
      )}
      {currentVisibleModal === "Contact" && (
        <Modal modalTitle="Contact - Linfolio" closeModal={closeModal} />
      )}
      {props.children}
    </main>
  );
};

export default Desktop;
