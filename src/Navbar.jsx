import React from "react";
import "./styles/navbar.css";
import logo1 from "./images/buchabarn4(1).png";
import logo2 from "./images/buchabarn4.png";

export default () => {
  return (
    <div id="nav">
      <p className="nav-text">FAQ</p>
      {/* <p className="nav-text" onClick={click}>
        Flavors
      </p> */}
      <img src={logo1} id="logo1" />
      {/* <p className="nav-text">Pay</p> */}
      <p className="nav-text">Contact</p>
    </div>
  );
};
