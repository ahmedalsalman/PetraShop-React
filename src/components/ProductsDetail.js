import React, { Component } from "react";
import { connect } from "react-redux";
import "./counter.css";
import { fetchProductDetail, addItemToCart } from "../redux/actions";

class ProductsDetail extends Component {
  state = {
    count: 1,
  };
  render() {
    const { productID } = this.props.match.params;
    let product = this.props.products.find((prod) => prod.id === +productID);
    if (!product) return <p>Loading...</p>;
    return (
      <div class="container">
        <div class="row">
          <div class="col">
            <img
              src={product.image1}
              className="img-thumbnail img-fluid"
              alt={product.name}
            />
          </div>
          <div class="col">
            <h3>{product.name}</h3>
            <h3>{product.price}</h3>
            <h3>{product.description}</h3>
            <br />
            <button
              class="btn btn-rounded btn-danger btn-sm text-white"
              onClick={() => addItemToCart(product.id)}
            >
              + Add Item
            </button>
            <div class="number-input md-number-input">
              <button
                onclick={() => this.setState({ count: 1 })}
                class="minus"
              ></button>
              <input
                class="quantity"
                min="0"
                name="quantity"
                value="1"
                type="number"
              />
              <button
                onclick={() => this.setState({ count: 2 })}
                class="plus"
              ></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (productID) => dispatch(addItemToCart(productID)),
});

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsDetail);
