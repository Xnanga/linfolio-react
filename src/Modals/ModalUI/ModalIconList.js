import styles from "./ModalIconList.module.css";

const ModalIconList = (props) => {
  return (
    <div className={styles["modal-icon-list"]}>
      {props.listData.map((imgEntry) => {
        return (
          <a
            href={imgEntry.linkUrl}
            key={Math.random()}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={styles["modal-icon-list__img"]}
              src={imgEntry.imgSrc}
              alt={imgEntry.imgAlt}
              title={imgEntry.title}
            />
          </a>
        );
      })}
    </div>
  );
};

export default ModalIconList;
