import Modal from "../../Modals/ModalUI/Modal";
import BioModalContent from "../../Modals/ModalContent/BioModalContent";
import StackModalContent from "../../Modals/ModalContent/StackModalContent";
import PortfolioModalContent from "../../Modals/ModalContent/PortfolioModalContent";
import ExperienceModalContent from "../../Modals/ModalContent/ExperienceModalContent";

import ContactModalContent from "../../Modals/ModalContent/ContactModalContent";

import styles from "./Desktop.module.css";

const createModalTitle = (titleName) => 
  `${titleName} ${String.fromCodePoint(9881)} Jamie Peutherer ${String.fromCodePoint(9881)} Linfolio`;

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
          modalTitle={createModalTitle('Bio')}
          closeModal={closeModal}
          modalContent={<BioModalContent openModal={openModal} />}
          modalSize={"small"}
        />
      )}
      {props.activeModal === "Experience" && (
        <Modal
          modalTitle={createModalTitle('Experience')}
          closeModal={closeModal}
          modalContent={<ExperienceModalContent openModal={openModal} />}
          modalSize={"small"}
        />
      )}
      {props.activeModal === "Portfolio" && (
        <Modal
          modalTitle={createModalTitle('Portfolio')}
          closeModal={closeModal}
          modalContent={<PortfolioModalContent />}
          modalSize={"large"}
        />
      )}
      {props.activeModal === "Stack" && (
        <Modal
          modalTitle={createModalTitle('My Toolbox')}
          closeModal={closeModal}
          modalContent={<StackModalContent openModal={openModal} />}
          modalSize={"large"}
        />
      )}
      {props.activeModal === "Contact" && (
        <Modal
          modalTitle={createModalTitle('Contact')}
          closeModal={closeModal}
          modalContent={<ContactModalContent openModal={openModal} />}
          modalSize={"small"}
        />
      )}
      {props.children}
    </main>
  );
};

export default Desktop;
