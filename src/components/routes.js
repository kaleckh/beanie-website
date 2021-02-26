import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Cart from "./Cart";
import App from "../App";
import Register from "./Register";
export default (
  <BrowserRouter>
    <Switch>
      <Route component={Login} exact path="/login" />
      <Route component={Cart} path="/cart" />
      <Route component={App} path="/home" />
      <Route component={Register} path="/register" />
    </Switch>
  </BrowserRouter>
);
