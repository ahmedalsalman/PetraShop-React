import React, { Component } from "react";
import { connect } from "react-redux";
import "./carousel.css";
// Components
import ProductsCard from "./ProductsCard";

class ProductsList extends Component {
  render() {
    if (this.props.loading) return <p>Loading...</p>;

    const productCards = this.props.products.map((product) => (
      <ProductsCard key={product.id + product.name} product={product} />
    ));

    return (
      <div className="container">
        <h3>Products</h3>
        <div className="row">{productCards}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  loading: !state.products.products.length,
});

export default connect(mapStateToProps)(ProductsList);
