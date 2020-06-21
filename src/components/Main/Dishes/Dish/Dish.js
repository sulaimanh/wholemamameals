import React, { Component } from "react";
import styles from "./Dish.module.scss";
import { withRouter } from "react-router-dom";
import Ingredients from "./Ingredients/Ingredients";
import Tertiary from "../../../UI/Heading/Tertiary/Tertiary";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";

class Dish extends Component {
  constructor(props) {
    super(props);
    window.scrollTo(0, 0);
    const dish = JSON.parse(localStorage.getItem("dishes"));

    this.state = {
      title: dish[0].title,
      description: dish[0].description,
      youtubeId: dish[0].youtubeId,
      ingredients: dish[0].ingredients,
      steps: dish[0].steps,

      heading: "Don't forget to like and subscribe on YouTube!"
    };
  }

  mouseEnter = () => {
    this.setState({ heading: "Whole Mama Meals!" });
  };

  mouseLeave = () => {
    this.setState({
      heading: "Don't forget to like and subscribe on YouTube!"
    });
  };

  render() {
    let youtubeLink = `https://www.youtube.com/embed/${this.state.youtubeId}?SameSite=Noneenablejsapi=1&origin=https://wholemamameals.com`;

    return (
      <React.Fragment>
        <div className={styles.dish}>
          <div className={styles.wrapper}>
            <div className={[styles.playerWrapper].join(" ")}>
              <div
                style={{ cursor: "pointer" }}
                onClick={() =>
                  (window.location.href =
                    "https://www.youtube.com/channel/UChK66QIStHwkU9lhoRKTKcg")
                }
              >
                <div
                  onMouseEnter={this.mouseEnter}
                  onMouseLeave={this.mouseLeave}
                  className={styles.sub}
                >
                  <p className={[styles.paragraph, styles.sub__text].join(" ")}>
                    {this.state.heading}
                  </p>
                </div>
              </div>
              <iframe
                samesite="Secure"
                title={this.state.title}
                className={styles.playerWrapper__reactPlayer}
                src={youtubeLink}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className={styles.description}>
              {/* <YoutubeSubscribe /> */}
              <Tertiary margin="small" center="true">
                {this.state.title}
              </Tertiary>
              <p className={styles.paragraph}>{this.state.description}</p>
            </div>
          </div>

          <div className={styles.dish__lists}>
            <div className={styles.dish__ingredientsContainer}>
              <Ingredients
                section="Ingredients"
                items={this.state.ingredients}
              />
            </div>

            <div className={styles.dish__stepsContainer}>
              <Ingredients section="Steps" items={this.state.steps} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes.dishes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchDishes: () => dispatch(actions.fetchDishes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dish));
