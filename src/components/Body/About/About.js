import React from "react";
import styles from "./About.module.scss";
import Secondary from "../../UI/Heading/Secondary/Secondary";
import Tertiary from "../../UI/Heading/Tertiary/Tertiary";
import Soup from "../../../assets/images/soup.png";
import Falafal from "../../../assets/images/falafal.jpeg";
import Mama from "../../../assets/images/banner.png";

const about = () => {
  return (
    <section className={styles.sectionAbout}>
      <Secondary margin="big" center="true">
        Fresh, Unique, and Simple
      </Secondary>

      <div className={styles.row}>
        <div className={[styles.col1of2].join(" ")}>
          <Tertiary>Delicious Recipes</Tertiary>
          <p className={styles.paragraph}>
            I post videos every week showing you how to make savory and sweet
            dishes, step by step.
          </p>
          <Tertiary>Type of Food</Tertiary>
          <p className={styles.paragraph}>
            My cooking is influenced by my childhood and the recipes and
            techniques of North Africa. Let’s learn from each other and enjoy
            delicious, nutritious food!
          </p>
        </div>

        <div className={styles.col1of2}>
          <div className={styles.composition}>
            <img
              src={Soup}
              alt="Creator"
              className={[
                styles.composition__photo,
                styles.composition__photoP1
              ].join(" ")}
            />
            <img
              src={Falafal}
              alt="Rolls"
              className={[
                styles.composition__photo,
                styles.composition__photoP2
              ].join(" ")}
            />
            <img
              src={Mama}
              alt="Knitting"
              className={[
                styles.composition__photo,
                styles.composition__photoP3
              ].join(" ")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
