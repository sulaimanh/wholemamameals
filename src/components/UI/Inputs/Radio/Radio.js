import React from "react";
import styles from "./Radio.module.scss";

const radio = props => {
  return (
    <div className={styles.form__group}>
      <div className={styles.form__radioGroup}>
        <input type="text" />
        <label htmlFor="small">
          <span></span>
          Welcome
        </label>
      </div>
    </div>
  );
};

export default radio;
