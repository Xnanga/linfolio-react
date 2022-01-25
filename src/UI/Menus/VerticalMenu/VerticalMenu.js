import SquareBlockButton from "./SquareBlockButton";

import styles from "./VerticalMenu.module.css";

const VerticalMenu = (props) => {
  const showModalHandler = (e) => {
    props.modalIdHandler(e.target.id);
  };

  const buttonData = [
    {
      id: "Bio",
      buttonAction: showModalHandler,
      iconURL: "/icons/user-icon.png",
      altText: "user icon",
    },
    {
      id: "Portfolio",
      buttonAction: showModalHandler,
      iconURL: "/icons/folder-icon.png",
      altText: "folder icon",
    },
    {
      id: "Stack",
      buttonAction: showModalHandler,
      iconURL: "/icons/layers-icon.png",
      altText: "technology stack icon",
    },
    {
      id: "Contact",
      buttonAction: showModalHandler,
      iconURL: "/icons/paper-plane-icon.png",
      altText: "paper plane icon",
    },
  ];

  return (
    <nav className={styles["vertical-menu"]}>
      {buttonData.map((btn) => {
        return (
          <SquareBlockButton
            id={btn.id}
            key={Math.random()}
            className={btn.iconClass}
            buttonAction={btn.buttonAction}
            iconURL={btn.iconURL}
            altText={btn.altText}
          />
        );
      })}
      <div className={styles["vertical-menu__author"]}>
        <a
          href="https://github.com/Xnanga"
          title="Visit my Github Profile"
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles["vertical-menu__author-msg"]}>Jamie</span>
          <span className={styles["vertical-menu__author-msg"]}>Peutherer</span>
        </a>
      </div>
    </nav>
  );
};

export default VerticalMenu;
