import React, { Component } from "react";
import About from "../../components/Main/About/About";
import Dishes from "../Dishes/Dishes";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Big from "../../components/UI/Button/Big/Big";
import styles from "./Layout.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Dish from "../../components/Main/Dishes/Dish/Dish";
import { withRouter } from "react-router-dom";
// import YoutubeSubcribe from "../../components/Main/Dishes/Dish/YoutubeSubscribe/YoutubeSubscribe";
import MiniHeader from "../../components/Header/MiniHeader/MiniHeader";
import asyncComponent from "../../hoc/asyncComponent/asyncComponent";
import smoothscroll from "smoothscroll-polyfill";
// import DidYouEnjoy from "../../components/DidYouEnjoy/DidYouEnjoy";
// import Modal from "../../components/UI/Modal/Modal";

const asyncAddDish = asyncComponent(() => {
  return import("../Dishes/AddDish/AddDish");
});

const asyncAuth = asyncComponent(() => {
  return import("../Auth/Auth");
});

class Layout extends Component {
  state = {
    showSubscribe: false,
    showModal: false,
    heading: "Subscribe to Whole Mama Meals on YouTube!",
    bottomButton: true
  };

  constructor(props) {
    super(props);
    this.shopRef = React.createRef();
    smoothscroll.polyfill();
  }

  moveToSection = (event) => {
    this.shopRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  // handlerSubmit = async () => {
  //   youtube
  //     .get("/channels", {
  //       params: {
  //         part: "brandingSettings",
  //         id: "UChK66QIStHwkU9lhoRKTKcg",
  //         key: API_KEY
  //       }
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const showSubscribe = window.scrollY < 100;
      if (showSubscribe === this.state.showSubscribe) {
        this.setState({ showSubscribe: !showSubscribe });
      }
    });
  }

  onSubscribeHandler = () => {
    window.location.href =
      "https://www.youtube.com/channel/UChK66QIStHwkU9lhoRKTKcg";
  };

  goBackToMainDishesHandler = (event) => {
    this.props.history.goBack();
    // this.setState({ showModal: !this.state.showModal });
  };

  // onLeaveModal = (event) => {
  //   event.preventDefault();
  //   this.setState({ showModal: !this.state.showModal });
  //   this.props.history.goBack();
  // };

  mouseEnter = () => {
    this.setState({ heading: "Whole Mama Meals!" });
  };

  mouseLeave = () => {
    this.setState({
      heading: "Subscribe to Whole Mama Meals on YouTube!"
    });
  };

  bottomMouseEnter = () => {
    this.setState({ bottomButton: false });
  };

  bottomMouseLeave = () => {
    this.setState({ bottomButton: true });
  };

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/admin" component={asyncAuth} />
          <Route path="/dish">
            {/* {this.state.showModal ? (
              <Modal clicked={this.onLeaveModal} show={this.state.showModal}>
                <DidYouEnjoy clicked={this.onLeaveModal} />
              </Modal>
            ) : null} */}
            <MiniHeader
              goBackToMainDishesHandler={this.goBackToMainDishesHandler}
            />
            <Dish title={this.props.location.search} />
            <Footer />
          </Route>
          {this.props.isAuthenticated ? (
            <Route path="/addDish" component={asyncAddDish} />
          ) : null}

          <Route path="/">
            <div
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
              onClick={this.onSubscribeHandler}
              className={styles.bannerTop}
            >
              <p
                className={[styles.paragraph, styles.bannerTop__text].join(" ")}
              >
                <FontAwesomeIcon icon={faYoutube} /> {this.state.heading}
              </p>
            </div>
            <Header moveToSectionClicked={this.moveToSection.bind(this)} />
            <About />
            {/* <Maryouma /> */}
            <Dishes isModal={this.state.showModal} shopRef={this.shopRef} />
            <Footer />
          </Route>
        </Switch>
        {/* {sub} */}
        <div
          onMouseEnter={this.bottomMouseEnter}
          onMouseLeave={this.bottomMouseLeave}
          className={styles.Small}
        >
          <Big
            animateGrowth={true}
            animated="true"
            small="true"
            color="primary"
            handler={this.onSubscribeHandler}
          >
            {this.state.bottomButton ? (
              <FontAwesomeIcon icon={faYoutube} />
            ) : (
              <p className={[styles.paragraph, styles.growParagraph].join(" ")}>
                <FontAwesomeIcon icon={faYoutube} /> Whole Mama Meals
              </p>
            )}
          </Big>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    dishes: state.dishes.dishes
  };
};

export default connect(mapStateToProps)(withRouter(Layout));
