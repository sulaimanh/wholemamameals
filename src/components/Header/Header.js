import React from "react";
import styles from "./Header.module.scss";
import Big from "../UI/Button/Big/Big";

const header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logoBox}>
        {/* <img src={Logo} alt="Logo" className={styles.header__logo} /> */}
      </div>

      <div className={styles.header__textBox}>
        <h1 className={styles.headingPrimary}>
          <span className={styles.headingPrimaryMain}>Whole Mama Meals</span>
          <span className={styles.headingPrimarySub}>
            Lets make savory and sweet dishes
          </span>
        </h1>

        <Big handler={props.moveToSectionClicked} color="white" animated="true">
          My Recipes
        </Big>
      </div>
    </header>
  );
};

export default header;
