import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM,
  CHECKOUT,
  SET_CART,
} from "./actionTypes";
import instance from "./instance";

export const removeItemFromCart = (ID) => async () => {
  try {
    await instance.delete(`item/delete/${ID}/`);
  } catch (err) {
    console.error(err);
  }
};

export const checkoutCart = async () => {
  try {
    await instance.post(`cart/checkout/`);
  } catch (err) {
    console.error(err);
  }
};

export const fetchCart = (ID) => async (dispatch) => {
  try {
    const res = await instance.get(`cart/${ID}/`);
    const cart = res.data;
    dispatch({ type: SET_CART, payload: cart.items });
  } catch (err) {
    console.error(err);
  }
};
export const addItemToCart = (productID) => async (dispatch) => {
  try {
    const res = await instance.post(`item/create/`, {
      product: productID,
      count: 1,
    });
    console.log(productID);
    const product = res.data;
    dispatch({ type: ADD_ITEM_TO_CART, payload: product });
    await fetchCart(productID);
  } catch (err) {
    console.error(err);
  }
};
