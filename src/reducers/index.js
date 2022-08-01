import { combineReducers } from "redux";
import products from "./products";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  products,
  form: formReducer,
});
