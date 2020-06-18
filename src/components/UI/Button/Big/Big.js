import React from "react";
import styles from "./Big.module.scss";

const big = (props) => {
  let style = [styles.btn];

  if (props.small === "true") {
    style.push(styles.btnSmll);
  }

  if (props.color === "white") {
    style.push(styles.btnWhite);
  } else if (props.color === "primary") {
    style.push(styles.btnPrimary);
  }

  if (props.animated === "true") {
    style.push(styles.btnAnimated);
  }

  if (props.disabled) {
    style.push(styles.btnDisabled);
  }

  // - Something weird is happening for the button in the Auth component
  // - I had to add this in order to get the disabled property...
  // - I dont know why its not working with just the "&Disbaled" class
  if (props.disabled && props.authDisabled) {
    style.push(styles.btnDisabledAuth);
  }

  return (
    <a onClick={props.handler} className={style.join(" ")}>
      {props.children}
    </a>
  );
};

export default big;
