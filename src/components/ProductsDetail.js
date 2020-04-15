import React, { Component } from "react";
import { fetchProductDetail } from "../redux/actions";

import { connect } from "react-redux";

class ProductsDetail extends Component {
  // componentDidMount() {
  //   this.props.fetchProductDetail(this.props.match.params.productID);
  // }
  render() {
    if (!this.props.product) return <p>Loading...</p>;
    return (
      <div className="author">
        <div>
          <h3>{this.props.product.name}</h3>
          <h3>{this.props.product.price}</h3>
          <h3>{this.props.product.description}</h3>
          <img
            src={this.props.product.image1}
            className="img-thumbnail img-fluid"
            alt={this.props.product.name}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.products.detail,
    loading: !state.products.detail.length,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchProductDetail: (productID) => dispatch(fetchProductDetail(productID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsDetail);
