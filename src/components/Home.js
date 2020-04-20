import React, { Component } from "react";
import { connect } from "react-redux";
import "./carousel.css";
// Components
import ProductsCard from "./ProductsCard";

class Home extends Component {
  render() {
    if (this.props.loading) return <p>Loading...</p>;

    const productCards = this.props.products.map((product) => (
      <ProductsCard key={product.id + product.name} product={product} />
    ));
    const categories = this.props.products.map((product) => (
      <div class="col-12 col-sm-6 col-md-4">
        <div className="image">
          <img src={product.image1} alt="" />

          <h2>
            <span>
              Check out our collection in:<span class="spacer"></span>
              <br />
              <span class="spacer"></span>
              {product.category}
            </span>
          </h2>
        </div>
      </div>
    ));

    return (
      <div className="container">
        <main role="main">
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div
                  class="container"
                  style={{
                    include: "icons/placeholder.svg",
                    width: "100%",
                    height: "100%",
                    "background-color": "rgb(34, 0, 0)",
                    color: "#777",
                    text: " ",
                    title: " ",
                  }}
                >
                  <div class="carousel-caption text-left">
                    <h1>New Collection Arrived.</h1>
                    <p>
                      Check out the new collection of handmade productsm made by
                      talented craftsmen with high quality material.
                    </p>
                    <p>
                      <a
                        class="btn btn-lg btn-warning"
                        href="/products/"
                        role="button"
                      >
                        Browse Products
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div
                  class="container"
                  style={{
                    include: "icons/placeholder.svg",
                    width: "100%",
                    height: "100%",
                    "background-color": "rgb(34, 11, 0)",
                    color: "#777",
                    text: " ",
                    title: " ",
                  }}
                >
                  <div class="carousel-caption text-left">
                    <h1>Save Lives.</h1>
                    <p>
                      You can contribute to the community and fight poverty by
                      buying our products, s fifty percent of our profit goes to
                      charity.
                    </p>
                    <p>
                      <a class="btn btn-lg btn-warning" href="#" role="button">
                        Learn more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div
                  class="container"
                  style={{
                    include: "icons/placeholder.svg",
                    width: "100%",
                    height: "100%",
                    "background-color": "rgb(34, 26, 0)",
                    color: "#777",
                    text: " ",
                    title: " ",
                  }}
                >
                  <div class="carousel-caption text-left">
                    <h1>Stalin Supports Petrashop.</h1>
                    <p>
                      The soon to be world emperror Mr.Joseph Stalin has blessed
                      the achievements made by Petra shop team.
                    </p>
                    <p>
                      <a class="btn btn-lg btn-warning" href="#" role="button">
                        Browse gallery
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#myCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#myCarousel"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <div class="top_catagory_area section-padding-80 clearfix">
            <div class="container">
              <div class="row justify-content-center">{categories}</div>
            </div>
          </div>
        </main>
        <br />
        <br />
        <br />
        <br />
        <h3>Trending Products:</h3>
        <div className="row">{productCards}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  loading: !state.products.products.length,
});

export default connect(mapStateToProps)(Home);
