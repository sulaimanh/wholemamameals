import React from "react";
import styles from "./MiniHeader.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const miniHeader = (props) => {
  return (
    <div className={styles.miniHeader}>
      <div className={styles.miniHeader__buttonContainer}>
        <FontAwesomeIcon
          onClick={props.goBackToMainDishesHandler}
          icon={faArrowLeft}
          size="2x"
          color="white"
          className={styles.fontAwesomeIcon}
        />
      </div>
      <h1 className={styles.miniHeader__header}>Whole Mama Meals</h1>
    </div>
  );
};

export default miniHeader;
