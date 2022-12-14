import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../styles/titlehead.css";
import logo from "../images/buchabarn4(2).png";

export default () => {
  return (
    <div className="title-head">
      <img src={logo} />
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        id="order-btn"
        // href="https://square.link/u/A17ZE6oO?src=sheet"
        target="_blank"
      >
        <Link to="/shop" style={{ color: "white" }}>
          Order KidBucha
        </Link>
      </motion.a>
    </div>
  );
};
