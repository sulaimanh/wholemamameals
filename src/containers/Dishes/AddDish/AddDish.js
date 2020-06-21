import React, { Component } from "react";
import styles from "./AddDish.module.scss";
import axios from "axios";
import Input from "../../../components/UI/Inputs/Text/Text";
import TextArea from "../../../components/UI/Inputs/TextArea/TextArea";
import Button from "../../../components/UI/Button/Big/Big";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import { withRouter } from "react-router-dom";

class Dish extends Component {
  state = {
    title: "",
    youtubeId: "",
    description: "",
    ingredientName: "",
    ingredients: [],
    numberIngredients: 1,
    stepName: "",
    steps: [],
    numberSteps: 1,
    ingredientError: false,
    stepError: false
  };

  fileSelectedHandler = (event) => {
    this.setState({ selectedImage: event.target.files[0] });
  };

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("image", this.state.selectedImage, this.state.selectedImage.name);
    axios
      .post(
        "https://us-central1-wholemamameals.cloudfunctions.net/uploadImage",
        fd,
        {
          onUploadProgress: (progressEvent) => {
            console.log(
              "Upload Progress: " +
                Math.round((progressEvent.loaded / progressEvent.total) * 100) +
                "%"
            );
          }
        }
      )
      .then((res) => {
        console.log(res);
      });
  };

  onInputChanged = (event) => {
    const id = event.target.id;

    this.setState({ [id]: event.target.value });
  };

  addIngredient = () => {
    console.log(this.state.ingredientName);

    if (this.state.ingredientName !== "") {
      this.setState({
        numberIngredients: this.state.numberIngredients + 1,
        ingredients: this.state.ingredients.concat(this.state.ingredientName),
        ingredientError: false,
        ingredientName: ""
      });
    } else {
      this.setState({
        ingredientError: true
      });
    }
  };

  addStep = () => {
    if (this.state.stepName !== "") {
      this.setState({
        numberSteps: this.state.numberSteps + 1,
        steps: this.state.steps.concat(this.state.stepName),
        stepError: false,
        stepName: ""
      });
    } else {
      this.setState({
        stepError: true
      });
    }
  };

  submitDish = () => {
    if (this.state.steps.length === 0 || this.state.ingredients.length === 0) {
      if (this.state.steps.length === 0) {
        this.setState({ stepError: true });
      }
      if (this.state.ingredients.length === 0) {
        this.setState({ ingredientError: true });
      }
    } else {
      const dish = {
        title: this.state.title,
        youtubeId: this.state.youtubeId,
        description: this.state.description,
        ingredients: this.state.ingredients,
        steps: this.state.steps,
        index: this.props.dishes.length
      };

      this.props.onAddDish(dish, this.props.token);
      this.setState({
        title: "",
        youtubeId: "",
        description: "",
        ingredients: [],
        steps: [],
        stepName: "",
        ingredientName: "",
        numberSteps: 1,
        numberIngredients: 1
      });
      this.props.history.push("/");
    }
  };

  render() {
    let ingredients = [];
    for (let i = 0; i < this.state.numberIngredients; i++) {
      ingredients.push(
        <Input
          key={i}
          for="ingredientName"
          changed={this.onInputChanged}
          placeholder="Ingredient"
        />
      );
    }
    let steps = [];
    for (let i = 0; i < this.state.numberSteps; i++) {
      steps.push(
        <Input
          key={i}
          changed={this.onInputChanged}
          for="stepName"
          placeholder="Steps"
        />
      );
    }

    return (
      <div className={styles.addDish}>
        <Input for="title" changed={this.onInputChanged} placeholder="Title" />
        <Input
          for="youtubeId"
          changed={this.onInputChanged}
          placeholder="YouTube Video ID"
        />
        <TextArea
          for="description"
          changed={this.onInputChanged}
          placeholder="Description"
        />
        {ingredients.map((ing) => {
          return ing;
        })}
        {this.state.ingredientError ? (
          <p
            style={{ color: "red", fontWeight: "bold" }}
            className={styles.paragraph}
          >
            ERROR! MUST ADD AN INGREDIENT
          </p>
        ) : null}

        <Button handler={this.addIngredient} color="primary">
          Add Ingredient
        </Button>
        <br />
        <br />
        <br />
        {steps.map((step) => {
          return step;
        })}
        {this.state.stepError ? (
          <p
            style={{ color: "red", fontWeight: "bold" }}
            className={styles.paragraph}
          >
            ERROR! MUST ADD A STEP
          </p>
        ) : null}
        <Button handler={this.addStep} color="primary">
          Add Steps
        </Button>
        <br />
        <br />
        <br />
        <br />
        <Button handler={this.submitDish} color="primary">
          Submit Meal
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes.dishes,
    token: state.auth.token
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    onAddDish: (dish, token) => dispatch(actions.addDish(dish, token))
  };
};

export default connect(mapStateToProps, mapDispathToProps)(withRouter(Dish));
