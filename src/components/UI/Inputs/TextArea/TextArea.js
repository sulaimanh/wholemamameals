import React from "react";
import styles from "./TextArea.module.scss";

const textArea = (props) => {
  return (
    <div className={styles.form__group}>
      <textarea
        id={props.for}
        placeholder="*Enter Description"
        className={styles.form__textarea}
        onChange={props.changed}
        value={props.value}
        required
      ></textarea>
      <label className={styles.form__label} htmlFor="message">
        Enter Description
      </label>
    </div>
  );
};

export default textArea;
