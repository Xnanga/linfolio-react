import { useEffect, useState } from "react";
import Modal from "../../Modals/ModalUI/Modal";
import BioModalContent from "../../Modals/ModalContent/BioModalContent";
import StackModalContent from "../../Modals/ModalContent/StackModalContent";
import PortfolioModalContent from "../../Modals/ModalContent/PortfolioModalContent";

import ContactModalContent from "../../Modals/ModalContent/ContactModalContent";

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
          modalTitle="Bio &#9881; Linfolio"
          closeModal={closeModal}
          modalContent={<BioModalContent openModal={openModal} />}
          modalSize={"large"}
        />
      )}
      {props.activeModal === "Portfolio" && (
        <Modal
          modalTitle="Portfolio &#9881; Linfolio"
          closeModal={closeModal}
          modalContent={<PortfolioModalContent />}
          modalSize={"large"}
        />
      )}
      {props.activeModal === "Stack" && (
        <Modal
          modalTitle="My Toolbox &#9881; Linfolio"
          closeModal={closeModal}
          modalContent={<StackModalContent openModal={openModal} />}
          modalSize={"large"}
        />
      )}
      {props.activeModal === "Contact" && (
        <Modal
          modalTitle="Contact &#9881; Linfolio"
          closeModal={closeModal}
          modalContent={<ContactModalContent openModal={openModal} />}
          modalSize={"large"}
        />
      )}
      {props.children}
    </main>
  );
};

export default Desktop;
