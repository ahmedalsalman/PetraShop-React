import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//style
import "./App.css";

//componenets
import ProductsList from "./components/ProductsList";
import ProductsDetail from "./components/ProductsDetail";

const App = () => (
  <div id="app" className="container-fluid">
    <div className="row">
      <div className="content col-10">
        <Switch>
          <Route path="/products/:productID" component={ProductsDetail} />
          <Route path="/products" component={ProductsList} />
          <Redirect to="/products" />
        </Switch>
      </div>
    </div>
  </div>
);

export default App;
