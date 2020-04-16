import { GET_PROFILE } from "../actions/actionTypes";

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
