import React, { Component } from "react";
import validator from "validator";
import styles from "./Auth.module.scss";
import Spinner from "../../components/UI/Spinner/Spinner";
import Input from "../../components/UI/Inputs/Text/Text";
import Tertiary from "../../components/UI/Heading/Tertiary/Tertiary";
import Big from "../../components/UI/Button/Big/Big";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { Redirect } from "react-router-dom";
class Auth extends Component {
  state = {
    Email: "",
    password: "",
    confirmPassword: "",
    method: "signIn",
    passwordNotEqual: false
  };

  inputChangedHandler = (event) => {
    const id = event.target.id;

    const value = event.target.value;

    this.setState({ [id]: value, passwordNotEqual: false });
  };

  onSubmitRequest = (event) => {
    event.preventDefault();
    if (this.state.method === "signUp") {
      if (this.state.password === this.state.confirmPassword) {
        this.props.onAuth(
          this.state.Email,
          this.state.password,
          this.state.method !== "signIn"
        );
        this.setState({ Email: "", password: "", confirmPassword: "" });
      } else {
        this.setState({ passwordNotEqual: true });
      }
    } else {
      this.props.onAuth(
        this.state.Email,
        this.state.password,
        this.state.method !== "signIn"
      );
      this.setState({ Email: "", password: "" });
    }
  };

  render() {
    let errorMessage = null;

    if (this.props.error) {
      errorMessage = <p>{this.props.error.message}</p>;
    }

    let disabled = false;
    if (
      !validator.isEmail(this.state.Email) ||
      validator.isEmpty(this.state.password)
    ) {
      disabled = true;
    }

    let form = (
      <form onSubmit={this.onSubmitRequest} className={styles.form}>
        <Input
          for="Email"
          changed={this.inputChangedHandler}
          placeholder="*Email Address"
          value={this.state.Email}
        />
        <Input
          for="password"
          changed={this.inputChangedHandler}
          placeholder="*Password"
          type="password"
          value={this.state.password}
        />

        <Big
          small="true"
          handler={this.onSubmitRequest}
          color="primary"
          animated="false"
          authDisabled="true"
          disabled={disabled}
        >
          Submit
        </Big>
        <button className={styles.hide}></button>
      </form>
    );

    if (this.props.loading) {
      form = <Spinner />;
    }

    return (
      <div>
        <div className={styles.signHeading}>
          <div className={[styles.selection].join(" ")}>
            <Tertiary>Sign In&nbsp;</Tertiary>
          </div>
        </div>
        {errorMessage}
        {form}
        {this.props.isAuthenticated ? <Redirect to="/addDish" /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actions.auth(email, password, isSignUp))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
