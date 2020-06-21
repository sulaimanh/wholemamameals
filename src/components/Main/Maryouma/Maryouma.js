import React from "react";
import styles from "./Maryouma.module.scss";

import Secondary from "../../UI/Heading/Secondary/Secondary";
import Tertiary from "../../UI/Heading/Tertiary/Tertiary";
// import Heart from "../../../assets/images/heart.png";

const maryouma = () => {
  return (
    <section className={styles.sectionFeature}>
      <div className={styles.row}>
        <Secondary color="white" center="true" margin="big">
          More About Me
        </Secondary>
        <div className={styles.featureBox}>
          <figure className={styles.featureBox__shape}>
            {/* <img
              className={styles.featureBox__image}
              src={MaryoumaImage}
              alt="Person on a tour"
            /> */}
            <figcaption className={styles.featureBox__caption}>
              {/* <img src={Heart} alt="Love" /> */}
            </figcaption>
          </figure>
          <div className={styles.featureBox__text}>
            <Tertiary>Made with love and care</Tertiary>
            <p>
              I love to design and create new things. I can make blankets,
              scarves, caps, and sweaters. My most popular item is the blanket.
              They are lightweight, durable, and comfortable. If you have a
              special request, you can contact me using the form below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default maryouma;
