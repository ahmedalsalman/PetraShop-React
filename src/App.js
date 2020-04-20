import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//style
// import "./App.css";
import "./css/core-style.css";
//componenets
import ProductsList from "./components/ProductsList";
import ProductsDetail from "./components/ProductsDetail";
import RegistrationForm from "./components/RegistrationForm";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Home from "./components/Home";

const App = () => (
  <div className="container ">
    <NavBar />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <Switch>
      <Route path="/(login|signup)" component={RegistrationForm} />
      <Route path="/cart/:cartID" component={Cart} />
      {/* <Route path="/profile" component={Profile} /> */}
      <Route path="/products/:productID" component={ProductsDetail} />
      <Route path="/products" component={ProductsList} />
      <Route path="/home" component={Home} />
      <Redirect to="/home" />
    </Switch>
  </div>
);

export default App;
