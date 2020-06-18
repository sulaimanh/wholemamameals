import React from "react";
import styles from "./Text.module.scss";

const text = (props) => {
  return (
    <div className={styles.form__group}>
      <input
        id={props.for}
        placeholder={props.placeholder}
        className={styles.form__input}
        type={props.type}
        value={props.value}
        onChange={props.changed}
        required
      />
      <label className={styles.form__label} htmlFor={props.for}>
        {props.placeholder}
      </label>
    </div>
  );
};

export default text;
