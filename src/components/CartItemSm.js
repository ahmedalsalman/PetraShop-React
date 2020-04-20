import React from "react";
import { connect } from "react-redux";
import { removeItemFromCart } from "../redux/actions";
import { Link } from "react-router-dom";
import { fetchProductDetail } from "../redux/actions";

const CartItemSm = ({ item, removeItemFromCart }) => (
  <li>
    <div className="image row mx-auto">
      <h6 class="col">{item.product.name}</h6>
      <h6 class="col">{item.count} pieces</h6>
      <h6 class="col">{item.product.price} JD</h6>
      <p className="btn bg-danger" onClick={() => removeItemFromCart(item.id)}>
        X
      </p>
    </div>
  </li>
);

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  fetchProductDetail: (productID) => dispatch(fetchProductDetail(productID)),
});

export default connect(null, mapDispatchToProps)(CartItemSm);
