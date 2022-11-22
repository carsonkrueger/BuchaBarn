import React from "react";
import "../styles/body.css";
import logo from "../images/buchabarn4(2).png";

export default () => {
  return (
    <div class="body">
      <img src={logo} />
      <a
        id="order-btn"
        href="https://square.link/u/A17ZE6oO?src=sheet"
        target="_blank"
      >
        Order KidBucha
      </a>
    </div>
  );
};
