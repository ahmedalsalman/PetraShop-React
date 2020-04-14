import { SET_PRODUCTS, GET_DETAILS } from "../actions/actionTypes";

const initialState = {
  products: [],
  detail: [], //should be null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      let products = action.payload;
      return { ...state, products };
    case GET_DETAILS:
      const detail = action.payload;
      return { ...state, detail };
    default:
      return state;
  }
};

export default reducer;
