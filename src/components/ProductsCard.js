import React, { Component } from "react";
import { Link } from "react-router-dom";
import { addItemToCart } from "../redux/actions";
import { connect } from "react-redux";

class ProductsCard extends Component {
  render() {
    console.log(this.props.product.id);
    return (
      <div className="col-3 ml-6 mb-7 mt-6 mr-6 ">
        <div className="card ">
          <Link to={`/products/${this.props.product.id}`} className="card">
            <div className="card-body">
              <h5 className="card-title">{this.props.product.name}</h5>
            </div>
            <div className="image">
              <img
                className="card-img-top img-fluid"
                src={`${this.props.product.image1}`}
                alt={this.props.product.image1}
                style={{ width: "18rem", height: "21rem" }}
              />
            </div>
          </Link>
          <button
            class="btn btn-rounded btn-success btn-sm text-white px-2 py-1"
            onClick={() => addItemToCart(this.props.product.id)}
          >
            + Add Item
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (productID) => dispatch(addItemToCart(productID)),
});

export default connect(null, mapDispatchToProps)(ProductsCard);
