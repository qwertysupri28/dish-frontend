import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter,
} from "react-router-dom";

import HomeComponent from "./components/HomeComponent";
import DishComponent from "./components/DishComponent";
import DishDescription from "./components/DishDescription";

const RoutingModules = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <HomeComponent />
          </Route>
          <Route exact path="/dishDetail">
            <DishComponent />
          </Route>
          <Route exact path="/description">
            <DishDescription />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default RoutingModules;
