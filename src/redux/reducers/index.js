import { combineReducers } from "redux";

// Reducers
import productsReducer from "./products";

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;
