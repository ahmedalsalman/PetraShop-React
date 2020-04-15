import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//style
import "./App.css";

//componenets
import ProductsList from "./components/ProductsList";
import ProductsDetail from "./components/ProductsDetail";
import RegistrationForm from "./components/RegistrationForm";
import Cart from "./components/Cart";

const App = () => (
  <div id="app" className="container-fluid">
    <div className="row">
      <div className="content col-10">
        <Switch>
          <Route path="/(login|signup)" component={RegistrationForm} />
          <Route path="/cart" component={Cart} />
          <Route path="/products/:productID" component={ProductsDetail} />
          <Route path="/products" component={ProductsList} />
          <Redirect to="/products" />
        </Switch>
      </div>
    </div>
  </div>
);

export default App;
