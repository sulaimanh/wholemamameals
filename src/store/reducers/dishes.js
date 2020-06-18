import * as actionTypes from "../actions/actionTypes";
import updateObject from "../utility";

const initialState = {
  dishes: [],
  loading: true
};

const fetchDishesFail = (state, action) => {
  return updateObject(state, {
    loading: false
  });
};

const fetchDishesSuccess = (state, action) => {
  const dishes = action.payload.dishes;

  return updateObject(state, {
    dishes: dishes,
    loading: false
  });
};

const fetchDishesStart = (state, action) => {
  return updateObject(state, {
    loading: true
  });
};

const addDishFail = (state, action) => {
  return updateObject(state, {
    loading: false
  });
};

const addDishSuccess = (state, action) => {
  const dishes = state.dishes.concat(action.payload.dishes);
  return updateObject(state, {
    dishes: dishes,
    loading: false
  });
};

const addDishStart = (state, action) => {
  return updateObject(state, {
    loading: true
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DISHES_START:
      return fetchDishesStart(state, action);
    case actionTypes.FETCH_DISHES_SUCCESS:
      return fetchDishesSuccess(state, action);
    case actionTypes.FETCH_DISHES_FAIL:
      return fetchDishesFail(state, action);
    case actionTypes.ADD_DISH_START:
      return addDishStart(state, action);
    case actionTypes.ADD_DISH_SUCCESS:
      return addDishSuccess(state, action);
    case actionTypes.ADD_DISH_FAIL:
      return addDishFail(state, action);
    default:
      return state;
  }
};

export default reducer;
