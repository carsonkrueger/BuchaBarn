import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../styles/navbar.css";
import logo1 from "../images/buchabarn4(1.5).png";
import logo2 from "../images/buchabarn4.png";

export default () => {
  // const onClickFaq = (e) => {
  //   e.preventDefault();
  //   faqRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  // const onClickAbout = (e) => {
  //   e.preventDefault();
  //   aboutRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    // <div id="nav-container">
    <div id="nav">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        // href="https://square.link/u/A17ZE6oO?src=sheet"
        target="_blank"
      >
        <Link to="/">
          <img src={logo1} id="logo1" />
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="nav-text"
        // href="https://square.link/u/A17ZE6oO?src=sheet"
        target="_blank"
      >
        <Link to="/Shop" style={{ color: "black" }}>
          Shop
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        c
        whileTap={{ scale: 0.9 }}
        className="nav-text"
        href="_blank"
      >
        <Link to="/About" style={{ color: "black" }}>
          About
        </Link>
      </motion.div>

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="nav-text"
        href="_blank"
      >
        <Link to="/Contact" style={{ color: "black" }}>
          Contact
        </Link>
      </motion.a>
    </div>
    // </div>
  );
};
