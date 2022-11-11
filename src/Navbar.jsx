import React from "react";
import "./styles/navbar.css";
import logo1 from "./images/buchabarn4(1).png";
import logo2 from "./images/buchabarn4.png";

export default () => {
  return (
    <div id="nav">
      <img src={logo1} id="logo1" />

      <div id="nav-text">
        <p>Flavors</p>
        <p>About</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>
    </div>
  );
};
