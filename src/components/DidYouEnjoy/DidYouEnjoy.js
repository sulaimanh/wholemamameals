import React, { Component } from "react";
import styles from "./DidYouEnjoy.module.scss";
import Tertiary from "../UI/Heading/Tertiary/Tertiary";

class DidYouEnjoy extends Component {
  constructor(props) {
    super(props);
    const dish = JSON.parse(localStorage.getItem("dishToShow"));

    this.state = {
      title: dish.title,
      description: dish.description,
      youtubeId: dish.youtubeId
    };
  }

  render() {
    let youtubeLink = `https://img.youtube.com/vi/${this.state.youtubeId}/mqdefault.jpg?enablejsapi=1&origin=https://wholemamameals.com`;
    return (
      <div>
        <Tertiary>Did you enjoy this video?</Tertiary>
        <p className={styles.paragraph}>
          Please like and subscribe on{" "}
          <span className={styles.youtube}>YouTube</span>, if you haven't
          already!
        </p>
        <div>
          <Tertiary>Check out this recipe!</Tertiary>
          <div className={styles.dish}>
            <img className={styles.image} alt="product" src={youtubeLink}></img>
            <div className={styles.desc}>
              <Tertiary>{this.state.title}</Tertiary>
              <p className={styles.paragraph}>{this.state.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DidYouEnjoy;
