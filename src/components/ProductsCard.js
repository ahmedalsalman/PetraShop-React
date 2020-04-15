import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchProductDetail, addItemToCart } from "../redux/actions";
import { connect } from "react-redux";

class ProductsCard extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <Link
          to={`/products/${this.props.product.id}`}
          className="card"
          onClick={() => this.props.fetchProductDetail(this.props.product.id)}
        >
          <div className="card-body">
            <h5 className="card-title">{this.props.product.name}</h5>
          </div>
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={`${this.props.product.image1}`}
              alt={this.props.product.image1}
              length="200"
              width="200"
            />
          </div>
        </Link>
        <button onClick={() => addItemToCart(this.props.product)}>
          Add Item
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchProductDetail: (productID) => dispatch(fetchProductDetail(productID)),
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(ProductsCard);
