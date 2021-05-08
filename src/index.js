import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// pages for this product
import LandingPage from "../src/views/LandingPage";


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={LandingPage} />
      {/* <Route path="/profile-page" component={ProfilePage} /> */}
      {/* <Route path="/login-page" component={LoginPage} /> */}
      {/* <Route path="/" component={Components} /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
