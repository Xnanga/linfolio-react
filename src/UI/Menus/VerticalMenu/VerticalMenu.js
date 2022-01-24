import SquareBlockButton from "./SquareBlockButton";

import styles from "./VerticalMenu.module.css";

const VerticalMenu = (props) => {
  const buttonData = [
    {
      id: Math.random(),
      title: "Bio",
      anchor: "anchor 1",
      iconURL: "/icons/user-icon.png",
      altText: "user icon",
    },
    {
      id: Math.random(),
      title: "Project Portfolio",
      anchor: "anchor 2",
      iconURL: "/icons/folder-icon.png",
      altText: "folder icon",
    },
    {
      id: Math.random(),
      title: "Tech Stack",
      anchor: "anchor 3",
      iconURL: "/icons/layers-icon.png",
      altText: "technology stack icon",
    },
    {
      id: Math.random(),
      title: "Contact",
      anchor: "anchor 3",
      iconURL: "/icons/paper-plane-icon.png",
      altText: "paper plane icon",
    },
  ];

  return (
    <nav className={styles["vertical-menu"]}>
      {buttonData.map((btn) => {
        return (
          <SquareBlockButton
            key={btn.id}
            className={btn.iconClass}
            anchor={btn.anchor}
            iconURL={btn.iconURL}
            altText={btn.altText}
            title={btn.title}
          />
        );
      })}
    </nav>
  );
};

export default VerticalMenu;
