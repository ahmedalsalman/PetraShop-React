import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER } from "./actionTypes";
import { resetErrors, setErrors } from "./index";
import { fetchCart } from "./cart";
import instance from "./instance";

export const checkForExpiredToken = () => {
  return (dispatch) => {
    const access = localStorage.getItem("access");

    if (access) {
      const currentTime = Date.now() / 1000;

      const user = jwt_decode(access);
      if (user.exp >= currentTime) {
        setLocalStorage(access);
        setAuthToken(access);
        dispatch(setCurrentUser(user));
        dispatch(fetchCart(user.user_id));
      } else {
        dispatch(logout());
      }
    }
  };
};

const setLocalStorage = (access) => {
  if (access) {
    localStorage.setItem("access", access);
  } else {
    localStorage.removeItem("access");
  }
};

const setAuthToken = (access) => {
  if (access) {
    instance.defaults.headers.common.Authorization = `Bearer ${access}`;
  } else {
    delete instance.defaults.headers.common.Authorization;
  }
};

const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const registerForm = (userData, history, type) => async (dispatch) => {
  try {
    const res = await instance.post(`/${type}/`, userData);
    const { access } = res.data;
    dispatch(resetErrors());

    const decodeUser = jwt_decode(access);
    setLocalStorage(access);
    setAuthToken(access);
    dispatch(setCurrentUser(decodeUser));
    dispatch(fetchCart(decodeUser.user_id));
    if (type) history.push("/products");
  } catch (error) {
    dispatch(setErrors(error.response.data));
    console.error(error.response.data);
  }
};

export const logout = () => (dispatch) => {
  setLocalStorage();
  setAuthToken(null);
  dispatch(setCurrentUser(null));
};
