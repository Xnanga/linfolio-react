import { useEffect, useState } from "react";
import Modal from "../../Modals/ModalUI/Modal";
import BioModalContent from "../../Modals/ModalContent/BioModalContent";
import PortfolioModalContent from "../../Modals/ModalContent/PortfolioModalContent";

import styles from "./Desktop.module.css";

const Desktop = (props) => {
  const closeModal = () => {
    props.modalIdHandler("");
  };

  const openModal = (modalId) => {
    props.modalIdHandler(modalId);
  };

  return (
    <main className={styles.desktop}>
      {props.activeModal === "Bio" && (
        <Modal
          modalTitle="Bio - Linfolio"
          closeModal={closeModal}
          modalContent={<BioModalContent openModal={openModal} />}
          modalSize={"small"}
        />
      )}
      {props.activeModal === "Portfolio" && (
        <Modal
          modalTitle="Project Portfolio - Linfolio"
          closeModal={closeModal}
          modalContent={<PortfolioModalContent />}
          modalSize={"large"}
        />
      )}
      {props.activeModal === "Stack" && (
        <Modal
          modalTitle="Tech Stack - Linfolio"
          closeModal={closeModal}
          modalSize={"large"}
        />
      )}
      {props.activeModal === "Contact" && (
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
