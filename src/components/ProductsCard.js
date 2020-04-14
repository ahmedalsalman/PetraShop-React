import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchProductDetail } from "../redux/actions";
import { connect } from "react-redux";

class ProductsCard extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <Link to={`/products/${this.props.product.id}`} className="card">
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={`${this.props.product.image1}`}
              alt={this.props.product.image1}
              length="200"
              width="200"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>{this.props.product.name}</span>
            </h5>
          </div>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductDetail: (productID) => dispatch(fetchProductDetail(productID)),
  };
};

export default connect(null, mapDispatchToProps)(ProductsCard);
