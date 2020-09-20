import { combineReducers } from "redux";

const listProductReducer = (state = [], action) => {
  switch (action.type) {
    case "AMBIL_DATA":
      return action.payload;
    default:
      return state;
  }
};

const choosenProductReducer = (state = null, action) => {
  switch (action.type) {
    case "CHOOSE_PRODUCT":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  listProduct: listProductReducer,
  choosenProduct: choosenProductReducer,
});
