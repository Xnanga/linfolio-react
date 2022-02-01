import { useEffect, useState } from "react";
import Modal from "../Modals/Modal";
import BioModalContent from "../Modals/ModalContent/BioModalContent";
import PortfolioModalContent from "../Modals/ModalContent/PortfolioModalContent";

import styles from "./Desktop.module.css";

const Desktop = (props) => {
  const [currentVisibleModal, setCurrentVisibleModal] = useState(
    props.activeModal
  );

  const closeModal = () => setCurrentVisibleModal("");

  const openModal = (modalId) => {
    setCurrentVisibleModal(modalId);
  };

  useEffect(() => {
    setCurrentVisibleModal(props.activeModal);
  }, [props]);

  return (
    <main className={styles.desktop}>
      {currentVisibleModal === "Bio" && (
        <Modal
          modalTitle="Bio - Linfolio"
          closeModal={closeModal}
          modalContent={<BioModalContent openModal={openModal} />}
          modalSize={"small"}
        />
      )}
      {currentVisibleModal === "Portfolio" && (
        <Modal
          modalTitle="Project Portfolio - Linfolio"
          closeModal={closeModal}
          modalContent={<PortfolioModalContent />}
          modalSize={"large"}
        />
      )}
      {currentVisibleModal === "Stack" && (
        <Modal
          modalTitle="Tech Stack - Linfolio"
          closeModal={closeModal}
          modalSize={"large"}
        />
      )}
      {currentVisibleModal === "Contact" && (
        <Modal
          modalTitle="Contact - Linfolio"
          closeModal={closeModal}
          modalSize={"large"}
        />
      )}
      {props.children}
    </main>
  );
};

export default Desktop;
