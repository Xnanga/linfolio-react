import styles from "./ModalIconList.module.css";

const ModalIconList = (props) => {
  // Loop through props and display images

  return (
    <div className={styles["modal-icon-list"]}>
      <img
        className={styles["modal-icon-list__img"]}
        src={props.imgSrc}
        alt={props.imgAlt}
      />
    </div>
  );
};

export default ModalIconList;
