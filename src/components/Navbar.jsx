import React from "react";
import { motion } from "framer-motion";

import "../styles/navbar.css";
import logo1 from "../images/buchabarn4(1.5).png";
import logo2 from "../images/buchabarn4.png";

export default ({ faqRef, aboutRef }) => {
  const onClickFaq = (e) => {
    e.preventDefault();
    faqRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onClickAbout = (e) => {
    e.preventDefault();
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="nav-container">
      <div id="nav">
        <motion.a
          whileHover={{ scale: 1.1 }}
          className="nav-text"
          href="_blank"
          onClick={(e) => onClickFaq(e)}
        >
          FAQ
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          className="nav-text"
          href="_blank"
          onClick={(e) => onClickAbout(e)}
        >
          About
        </motion.a>
        <img src={logo1} id="logo1" />
        <motion.a
          whileHover={{ scale: 1.1 }}
          className="nav-text"
          href="https://square.link/u/A17ZE6oO?src=sheet"
          target="_blank"
        >
          Order
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          className="nav-text"
          href="_blank"
          // onClick={(e) => handleClick(e)}
        >
          Contact
        </motion.a>
      </div>
    </div>
  );
};
