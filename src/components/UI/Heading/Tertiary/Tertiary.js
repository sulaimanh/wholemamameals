import React from "react";
import styles from "./Tertiary.module.scss";

const tertiary = (props) => {
  
  return (
    <h3
      className={[styles.headingTertiary, styles.uMarginBottomSmall].join(" ")}
    >
      {props.children}
    </h3>
  );
};

export default tertiary;
