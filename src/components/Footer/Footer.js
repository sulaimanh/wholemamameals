import React from "react";
import styles from "./Footer.module.scss";

const footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logoBox}>
        {/* <img src={Logo} alt="Full Logo" className={styles.footer__logo} /> */}
      </div>
      <div className={styles.row}>
        <div className={styles.col1of2}>
          <div className={styles.footer__navigation}>
            <ul className={styles.footer__list}>
              <li className={styles.footer__item}>
                <a
                  href="https://www.facebook.com/wholemamameals"
                  className={styles.footer__link}
                >
                  Facebook
                </a>
              </li>
              <li className={styles.footer__item}>
                <a
                  href="https://www.instagram.com/wholemamameals/"
                  className={styles.footer__link}
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.col1of2}>
          <p className={styles.footer__copyright}>
            <a
              href="https://www.youtube.com/channel/UChK66QIStHwkU9lhoRKTKcg"
              className={styles.footer__link}
            >
              YouTube
            </a>
          </p>
        </div>
      </div>
      <p
        onClick={() => {
          window.location.href = "https://developerspath.com";
        }}
        className={styles.para}
      >
        <span>Whole</span> Mama Meals
      </p>
    </footer>
  );
};

export default footer;
