import React from "react";
import { NavLink } from "react-router-dom";

const HomeComponent = () => {
  return (
    <div id="homeComponentbg" className="container">
      <div className="centered1">
        <h1>INDIAN FOOD</h1>
      </div>
      <div className="centered2">
        <h2>Discover the best food in different states.</h2>
        <NavLink to="/dishDetail">
          <button className="buttonDesign" type="button">Click Here</button>
        </NavLink>
      </div>
    </div>
  );
};
export default HomeComponent;
