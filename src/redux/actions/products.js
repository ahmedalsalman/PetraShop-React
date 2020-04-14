import { SET_PRODUCTS, GET_DETAILS } from "./actionTypes";

import instance from "./instance";

export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await instance.get("product-list/");
    const products = res.data;
    dispatch({
      type: SET_PRODUCTS,
      payload: products,
    });
  } catch {
    console.error("error fetching products");
  }
};

export const fetchProductDetail = (productID) => async (dispatch) => {
  try {
    const res = await instance.get(`/product-detail/${productID}`);
    console.log(res);
    const product = res.data;
    dispatch({
      type: GET_DETAILS,
      payload: product,
    });
  } catch {
    console.error("error fetching details");
  }
};
