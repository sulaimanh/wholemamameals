import React from "react";
import styles from "./Secondary.module.scss";

const headingSecondary = (props) => {
  // let margin = props.margin;
  // let center = props.center === true ? "uCenterText" : null;
  let style = [];

  if (props.margin === "big") {
    style.push(styles.uMarginBottomBig);
  } else if (props.margin === "medium") {
    style.push(styles.uMarginBottomMedium);
  } else if (props.margin === "small") {
    style.push(styles.uMarginBottomSmall);
  }

  if (props.center === "true") {
    style.push(styles.uCenterText);
  }

  let color = styles.headingSecondary__primary;
  if (props.color === "white") {
    color = styles.headingSecondary__white;
  }

  return (
    <div className={style.join(" ")}>
      <h2 className={[styles.headingSecondary, color].join(" ")}>
        {props.children}
      </h2>
    </div>
  );
};

export default headingSecondary;
