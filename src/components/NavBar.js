import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartItemSm from "./CartItemSm";
import "./navbar.css";
import { logout, checkoutCart } from "../redux/actions";
{
  /* <nav
      class="navbar fixed-top navbar-toggleable navbar-expand-sm scrolling-navbar navbar-alert  mb-5"
      style={{ "background-color": "rgba(59, 0, 83, 0.836)" }}
    ></nav> */
}
const NavBar = ({ cart, user, logout }) => {
  console.log(user);
  if (!cart.items) return <h1>Loading...</h1>;

  let cartItems = cart.items.map((item) => (
    <CartItemSm item={item} key={item.name + item.category} />
  ));
  return (
    <div class="row">
      <div class="col-8">
        <nav
          class="navbar fixed-top navbar-toggleable navbar-expand-sm scrolling-navbar navbar-alert  mb-5"
          style={{ "background-color": "rgb(85,14,55)" }}
        >
          <Link to={`/home/`}>
            <h3>Petra</h3>
          </Link>

          <ul class="nav navbar-nav nav-flex-icons ml-auto">
            <li class="nav-item avatar dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink-55"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="http://clipart-library.com/images_k/profile-silhouette-vector/profile-silhouette-vector-4.png"
                  class="rounded z-depth-0"
                  alt="avatar image"
                  style={{ width: "3rem", height: "3rem" }}
                />
              </a>
            </li>
            <li class="nav-item avatar dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink-55"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="http://clipart-library.com/img/1589013.png"
                  class="rounded z-depth-0"
                  alt="avatar image"
                  style={{ width: "3rem", height: "3rem" }}
                />
              </a>
              <div
                class="dropdown-menu dropdown-menu-right scrollbar-default"
                aria-labelledby="navbarDropdownMenuLink-55"
              >
                <div class="container">
                  <div class="row text-center">
                    {user ? (
                      <>
                        <div class="col-3">
                          <div class="avatar">
                            <img
                              id="userImageProfile"
                              src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                              height="80"
                              class="rounded z-depth-1-half"
                              alt="@user.UserName"
                            />
                          </div>
                        </div>
                        <div class="col-9">
                          <h5 class="font-weight-bold dark-grey-text">Ahmed</h5>
                          <h6 class="grey-text">
                            <strong>ahmed@gmail.com</strong>
                          </h6>
                          <a
                            class="btn btn-rounded btn-danger btn-sm text-white px-2 py-1"
                            onClick={() => logout()}
                          >
                            <small>Log out</small>
                          </a>
                        </div>
                      </>
                    ) : (
                      <>
                        <h6>
                          You're adding items as a guest, sign in to checkout
                        </h6>
                        <Link
                          to={`/login/`}
                          class="btn btn-rounded btn-success btn-sm text-white px-2 py-1"
                        >
                          <small>Login</small>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
                <div class="dropdown-divider"></div>
                {cartItems.length ? (
                  <>
                    <div className="row">
                      <ul>{cartItems}</ul>
                    </div>
                    <div className="row">
                      <ul>
                        <li>
                          <a
                            class="btn btn-rounded btn-warning btn-sm text-white px-2 py-1"
                            onClick={() => checkoutCart()}
                          >
                            <small>Check out</small>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <h3>Your cart is empty.</h3>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  checkoutCart: () => dispatch(checkoutCart()),
});
const mapStateToProps = ({ cart, user }) => ({ cart, user });

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
