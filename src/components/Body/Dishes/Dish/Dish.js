import React, { Component } from "react";
import styles from "./Dish.module.scss";
import { withRouter } from "react-router-dom";
import Ingredients from "./Ingredients/Ingredients";
import MiniHeader from "../../../Header/MiniHeader/MiniHeader";
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
      steps: dish[0].steps
    };
  }

  goBackToMainDishesHandler = (event) => {
    event.preventDefault();
    this.props.history.goBack();
  };

  render() {
    let youtubeLink = `https://www.youtube.com/embed/${this.state.youtubeId}`;

    return (
      <React.Fragment>
        <MiniHeader
          goBackToMainDishesHandler={this.goBackToMainDishesHandler}
        />

        <div className={styles.dish}>
          <div className={styles.wrapper}>
            <div className={[styles.playerWrapper].join(" ")}>
              <iframe
                title={this.state.title}
                className={styles.playerWrapper__reactPlayer}
                src={youtubeLink}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className={styles.description}>
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
