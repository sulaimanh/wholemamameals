import React, { Component } from "react";
import Body from "../../components/Body/Body";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Big from "../../components/UI/Button/Big/Big";
import styles from "./Layout.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Route, Switch } from "react-router-dom";
import AddDish from "../Dishes/AddDish/AddDish";
import Auth from "../Auth/Auth";
import { connect } from "react-redux";
import Dish from "../../components/Body/Dishes/Dish/Dish";
import { withRouter } from "react-router-dom";

class Layout extends Component {
  state = {
    max: false,
    selectedDish: "",
    dishes: [],
    title: ""
  };

  constructor(props) {
    super(props);
    this.shopRef = React.createRef();
  }

  moveToSection = (event) => {
    this.shopRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  onSubscribeHandler = () => {
    window.location.href =
      "https://www.youtube.com/channel/UChK66QIStHwkU9lhoRKTKcg";
  };

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/admin" component={Auth} />
          <Route path="/dish">
            <Dish title={this.props.location.search} />
            <Footer />
          </Route>
          {this.props.isAuthenticated ? (
            <Route path="/addDish" component={AddDish} />
          ) : null}
          <Route path="/">
            <Header moveToSectionClicked={this.moveToSection.bind(this)} />
            <Body shopRef={this.shopRef} />
            <Footer />
          </Route>
        </Switch>
        <div className={styles.Small}>
          <Big small="true" color="primary" handler={this.onSubscribeHandler}>
            <FontAwesomeIcon icon={faYoutube} />
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
