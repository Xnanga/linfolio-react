import ModalButton from "../ModalUI/ModalButton";

import styles from "./BioModalContent.module.css";

const BioModalContent = (props) => {
  const openLink = (url) => {
    window.open(url);
  };

  const buttonClickHandler = (e) => {
    props.openModal(e.target.id);
  };

  return (
    <>
      <h1>Hi there! I'm Jamie Peutherer</h1>
      <p>
        I'm a self-taught frontend web developer with a strong background in
        technical Search Engine Optimisation (7+ years in the field!).
      </p>
      <p>
        I like to build all sorts of odd websites and apps, especially webapp
        recreations of other tools and programs (like Ubuntu Linux!)
      </p>
      <p>
        I'm still learning more and more about good web development every day
        (Who doesn't have more to learn?), but I'm eager to jump right into a
        professional role real soon.
      </p>
      <p>
        You can find quick links to the most important stuff below - otherwise,
        feel free to click around and explore.
      </p>

      <div className={styles["bio-modal__button-grid"]}>
        <ModalButton
          id="CV"
          buttonText="Download CV"
          buttonAction={() => openLink("/documents/cv-dummy.txt")}
        />
        <ModalButton
          id="Portfolio"
          buttonText="Portfolio"
          buttonAction={buttonClickHandler}
        />
        <ModalButton
          id="Stack"
          buttonText="Tech Stack"
          buttonAction={buttonClickHandler}
        />
        <ModalButton
          id="Github"
          buttonText="Github Profile"
          buttonAction={() => openLink("https://github.com/Xnanga")}
        />
        <ModalButton
          id="LinkedIn"
          buttonText="LinkedIn Profile"
          buttonAction={() =>
            openLink("https://www.linkedin.com/in/jami3p3utherer/")
          }
        />
        <ModalButton
          id="Contact"
          buttonText="Contact"
          buttonAction={buttonClickHandler}
        />
      </div>
    </>
  );
};

export default BioModalContent;
