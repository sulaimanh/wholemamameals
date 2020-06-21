import React, { Component } from "react";
import styles from "./DishCard.module.scss";
import Button from "../../../UI/Button/Big/Big";

class DishCard extends Component {
  render() {
    let youtubeId = this.props.youtubeId;
    let youtubeLink = `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg?enablejsapi=1&origin=https://wholemamameals.com`;
    return (
      <div className={styles.card}>
        <div className={[styles.card__side, styles.card__sideFront].join(" ")}>
          <div className={styles.card__img}>
            <img
              className={styles.card__img__image}
              alt="product"
              src={youtubeLink}
            ></img>
          </div>
          <div className={styles.card__description}>
            <h3
              className={[
                styles.headingTertiary,
                styles.changeHeadingText
              ].join(" ")}
            >
              {this.props.title}
            </h3>

            <p className={[styles.paragraph, styles.changeText].join(" ")}>
              {this.props.description.substring(0, this.props.strLength)}...{" "}
              <span
                onClick={(e) => this.props.goToDishHandler(this.props.title, e)}
                className={styles.seeMore}
              >
                See More...
              </span>
            </p>
          </div>
        </div>

        <div className={[styles.card__side, styles.card__sideBack].join(" ")}>
          <div className={styles.card__cta}>
            <Button
              handler={(e) => this.props.goToDishHandler(this.props.title, e)}
              color="white"
              animated="false"
            >
              Recipe
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default DishCard;
