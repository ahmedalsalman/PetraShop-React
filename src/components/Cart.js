import React from "react";
import { connect } from "react-redux";

// Component
import CartItem from "./CartItem";
import { checkoutCart } from "../redux/actions";

const Cart = ({ cart, checkoutCart }) => {
  if (!cart.items) return <h1>Loading...</h1>;
  const cartItems = cart.items.map((item) => (
    <CartItem item={item} key={item.name + item.category} />
  ));

  return (
    <div className="container">
      {cartItems.length ? (
        <>
          <div className="row">{cartItems}</div>
          <button full danger onPress={checkoutCart}>
            <h3>Checkout</h3>
          </button>
        </>
      ) : (
        <h3>Your cart is empty.</h3>
      )}
    </div>
  );
};

const mapStateToProps = ({ cart }) => ({ cart });

const mapDispatchToProps = (dispatch) => ({
  checkoutCart: () => dispatch(checkoutCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
