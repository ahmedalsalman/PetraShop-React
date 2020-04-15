import { combineReducers } from "redux";

// Reducers
import productsReducer from "./products";
import userReducer from "./user";
import errorReducer from "./errors";
import cartReducer from "./cart";

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  errors: errorReducer,
  cart: cartReducer,
});

export default rootReducer;
