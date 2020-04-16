import { SET_CART, ADD_ITEM, REMOVE_ITEM, CHECKOUT } from "./actionTypes";
import instance from "./instance";

export const fetchCart = (ID) => async (dispatch) => {
  try {
    const res = await instance.get(`/cart/${ID}/`);
    const cart = res.data;
    console.log(cart);

    dispatch({
      type: SET_CART,
      payload: cart.items,
    });
  } catch {
    console.error("error fetching products");
  }
};

export const addItemToCart = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const checkoutCart = () => ({
  type: CHECKOUT,
});
