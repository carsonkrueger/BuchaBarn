import React from "react";

import "../styles/footer.css";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="foot-div">
        <a>Contact</a>
        <a>Help</a>
        <a>Est. 2022</a>
      </div>
      <div className="foot-div">
        <a>About</a>
        <a>Shop</a>
        <a>Contact</a>
      </div>
    </div>
  );
};

export default Footer;
