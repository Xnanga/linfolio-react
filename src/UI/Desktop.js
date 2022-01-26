import { useEffect, useState } from "react";
import Modal from "../Modals/Modal";
import BioModalContent from "../Modals/ModalContent/BioModalContent";

import styles from "./Desktop.module.css";

const Desktop = (props) => {
  const [currentVisibleModal, setCurrentVisibleModal] = useState(
    props.modalVisibilityHandler
  );

  const closeModal = () => setCurrentVisibleModal("");
  const openModal = (modalId) => {
    console.log(modalId);
    setCurrentVisibleModal(modalId);
  };

  useEffect(() => {
    setCurrentVisibleModal(props.modalVisibilityHandler);
    // props.modalChangedFlag ensures props changes
  }, [props]);

  return (
    <main className={styles.desktop}>
      {currentVisibleModal === "Bio" && (
        <Modal
          modalTitle="Bio - Linfolio"
          closeModal={closeModal}
          modalContent={<BioModalContent openModal={openModal} />}
        />
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
