import * as actionTypes from "./actionTypes";
import axios from "../../axios-dishes";

export const fetchDishesStart = () => {
  return {
    type: actionTypes.FETCH_DISHES_START
  };
};

export const fetchDishesSuccess = (dishes) => {
  return {
    type: actionTypes.FETCH_DISHES_SUCCESS,
    payload: {
      dishes: dishes
    }
  };
};
export const fetchDishesFail = (error) => {
  return {
    type: actionTypes.FETCH_DISHES_FAIL,
    payload: {
      error: error
    }
  };
};

export const fetchDishes = () => {
  return (dispatch) => {
    dispatch(fetchDishesStart());

    axios
      .get("/dishes.json")
      .then((res) => {
        let fetchedDishes = [];
        for (let k in res.data) {
          fetchedDishes.push(res.data[k].dish);
        }

        const dishes = fetchedDishes.reverse();

        dispatch(fetchDishesSuccess(dishes));
      })
      .catch();
  };
};

export const addDishStart = () => {
  return {
    type: actionTypes.ADD_DISH_START
  };
};

export const addDishSuccess = (dishes) => {
  return {
    type: actionTypes.ADD_DISH_SUCCESS,
    payload: {
      dishes: dishes
    }
  };
};
export const addDishFail = (error) => {
  return {
    type: actionTypes.ADD_DISH_FAIL,
    payload: {
      error: error
    }
  };
};

export const addDish = (dish, token) => {
  return (dispatch) => {
    dispatch(addDishStart());
    if (token) {
      axios
        .post("/dishes.json?auth=" + token, {
          dish: dish
        })
        .then((response) => {
          console.log("Added");
        })
        .catch((error) => {
          console.log("FAILED");
        });
    }
  };
};
