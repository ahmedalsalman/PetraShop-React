import { combineReducers } from "redux";

// Reducers
import productsReducer from "./products";
import userReducer from "./user";
import errorReducer from "./errors";
import cartReducer from "./cart";
import profileReducer from "./profile";

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  errors: errorReducer,
  cart: cartReducer,
  profile: profileReducer,
});

export default rootReducer;
