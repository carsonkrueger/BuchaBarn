import React from "react";
import "../styles/navbar.css";
import logo1 from "../images/buchabarn4(1.5).png";
import logo2 from "../images/buchabarn4.png";

export default ({ faqRef }) => {
  const handleClick = () => {
    faqRef.current.scrollIntoView({ behavior: "smooth" });
    // faqRef.current.scrollInto
  };

  return (
    <div id="nav-container">
      <div id="nav">
        <a className="nav-text" onClick={handleClick}>
          FAQ
        </a>
        <p className="nav-text">Flavors</p>
        <img src={logo1} id="logo1" />
        <a
          className="nav-text"
          href="https://square.link/u/A17ZE6oO?src=sheet"
          target="_blank"
        >
          Order
        </a>
        <p className="nav-text">Contact</p>
      </div>
    </div>
  );
};
