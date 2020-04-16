import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const NavBar = ({ user }) => (
  <nav
    className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
    id="mainNav"
  >
    <Link className="navbar-brand" to="/products">
      Petra
    </Link>
    <button
      className="navbar-toggler navbar-toggler-right"
      type="button"
      data-toggle="collapse"
      data-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <Link className="navbar-brand" to={`/cart/${user.user_id}`}>
        Cart
      </Link>
    </div>
  </nav>
);

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(NavBar);
