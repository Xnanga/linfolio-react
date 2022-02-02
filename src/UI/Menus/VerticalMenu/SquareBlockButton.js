import { useState, useEffect } from "react";

import styles from "./SquareBlockButton.module.css";

const SquareBlockButton = (props) => {
  const [buttonHighlighted, setButtonHighlighted] = useState("");

  useEffect(() => {
    setButtonHighlighted(props.visibleModal);
  }, [props]);

  const buttonHighlightHandler = (buttonId) => {
    if (buttonId === buttonHighlighted) {
      return `${styles["square-block-button--highlighted"]}`;
    } else {
      return `${styles["square-block-button"]}`;
    }
  };

  const buttonLabelHandler = (buttonId) => {
    if (buttonId === buttonHighlighted) {
      return `${styles["square-block-button__label--highlighted"]}`;
    } else {
      return `${styles["square-block-button__label"]}`;
    }
  };

  return (
    <button
      id={props.id}
      className={buttonHighlightHandler(props.id)}
      onClick={props.buttonAction}
    >
      <img
        className={styles["square-block-button__icon"]}
        src={props.iconURL}
        alt={props.altText}
      />
      <span className={buttonLabelHandler(props.id)}>{props.id}</span>
    </button>
  );
};

export default SquareBlockButton;
