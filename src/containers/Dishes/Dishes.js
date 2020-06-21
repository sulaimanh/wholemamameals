import React, { Component } from "react";
import styles from "./Dishes.module.scss";
import Secondary from "../../components/UI/Heading/Secondary/Secondary";
import DishCard from "../../components/Main/Dishes/DishCard/DishCard";
import Button from "../../components/UI/Button/Big/Big";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import YoutubeSubscribe from "../../components/Main/Dishes/Dish/YoutubeSubscribe/YoutubeSubscribe";

class Dishes extends Component {
  state = {
    visibleSlides: 3.25,
    strLength: 0
  };

  onSelectDish = (event) => {
    this.setState((prevState) => {
      return {
        purchasing: !prevState.purchasing
      };
    });
  };

  updateDimensions = () => {
    if (window.innerWidth > 900) {
      this.setState({ visibleSlides: 3.25, strLength: 165 });
    } else {
      if (window.innerWidth < 650) {
        this.setState({ visibleSlides: 2.1, strLength: 100 });
      } else {
        this.setState({ visibleSlides: 2.1, strLength: 110 });
      }
    }
  };

  componentDidMount() {
    this.props.onFetchDishes();

    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  goToDishHandler = (title, event) => {
    event.preventDefault();

    //!!: Need to delete what is in local storage
    let newTitle = decodeURI(title);
    newTitle = newTitle.replace(/[?]/i, "");

    const dish = this.props.dishes.filter((dish) => {
      if (dish.title === newTitle) {
        return dish;
      }
    });

    let random = Math.floor(Math.random() * this.props.dishes.length);
    let dishToShow = this.props.dishes[random];

    localStorage.setItem("dishes", JSON.stringify(dish));
    localStorage.setItem("dishToShow", JSON.stringify(dishToShow));
    this.props.history.push({ pathname: "/dish", search: `${title}` });
  };

  render() {
    let display = (
      <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight={400}
        visibleSlides={this.state.visibleSlides}
        totalSlides={this.props.dishes.length}
        step={2}
        dragStep={2}
        touchEnabled
        dragEnabled
        hasMasterSpinner={this.props.loading ? true : false}
      >
        <Slider spinner={() => <Spinner />} className={styles.ca}>
          {this.props.dishes.map((dish, index) => {
            return (
              <Slide className={styles.card} key={index} index={index}>
                <div className={styles.carousel} key={index}>
                  <DishCard
                    strLength={this.state.strLength}
                    goToDishHandler={this.goToDishHandler}
                    title={dish.title}
                    description={dish.description}
                    youtubeId={dish.youtubeId}
                  />
                </div>
              </Slide>
            );
          })}
        </Slider>
        <div className={styles.sectionShop__arrowsContainer}>
          <ButtonBack className={styles.sectionShop__arrows}>
            <div>
              <Button color="primary" small="true">
                <FontAwesomeIcon icon={faArrowLeft} />
              </Button>
            </div>
          </ButtonBack>
          <ButtonNext className={styles.sectionShop__arrows}>
            <div>
              <Button color="primary" small="true">
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </div>
          </ButtonNext>
        </div>
      </CarouselProvider>
    );

    return (
      <section ref={this.props.shopRef} className={styles.sectionShop}>
        {this.props.isModal ? null : (
          <Secondary margin="small" center="true">
            Cook Delicious Recipes!
          </Secondary>
        )}

        <div>{display}</div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes.dishes,
    loading: state.dishes.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchDishes: () => dispatch(actions.fetchDishes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dishes));
