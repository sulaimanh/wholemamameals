import React from "react";
import styles from "./MiniHeader.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "../../UI/Button/Big/Big";

const miniHeader = (props) => {
  return (
    <div className={styles.miniHeader}>
      <div className={styles.miniHeader__buttonContainer}>
        <Button
          small="true"
          handler={props.goBackToMainDishesHandler}
          color="primary"
        >
          <FontAwesomeIcon icon={faArrowLeft} size="sm" />
        </Button>
      </div>
      <h1 className={styles.miniHeader__header}>Whole Mama Meals</h1>
    </div>
  );
};

export default miniHeader;
