import React from "react";
import { connect } from "react-redux";
import { removeItemFromCart } from "../redux/actions";
import { Link } from "react-router-dom";
import { fetchProductDetail } from "../redux/actions";

const CartItem = ({ item, removeItemFromCart }) => (
  <div className="col-lg-4 col-md-6 col-12">
    <Link to={`/products/${item.product.id}`} className="card">
      <div className="card-body">
        <h5 className="card-title">{item.product.name}</h5>
        <h5 className="card-title">{item.count}</h5>
      </div>
      <div className="image">
        <img
          className="card-img-top img-fluid"
          src={item.product.image1}
          alt={item.product.image1}
          length="200"
          width="200"
        />
      </div>
      <button
        className="btn bg-danger"
        onClick={() => removeItemFromCart(item)}
      >
        Remove item
      </button>
    </Link>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  fetchProductDetail: (productID) => dispatch(fetchProductDetail(productID)),
});

export default connect(null, mapDispatchToProps)(CartItem);
