import React from "react";
import Layout from "./containers/Layout/Layout";
import "./App.scss";
import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";

class App extends Component {
  state = {
    loaded: false
  };

  componentDidMount() {
    this.props.onTryAutoSignUp();
  }

  render() {
    return (
      <div>
        <Layout />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  };
};

export default connect(null, mapDispatchToProps)(App);
