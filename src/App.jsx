import React from "react";

import "./styles/app.css";

import Navbar from "./components/Navbar";
import TitleHead from "./components/TitleHead";
import FaqBody from "./components/FaqBody";
import AboutHead from "./components/AboutHead";

export default () => {
  return (
    <>
      <Navbar />
      <TitleHead />
      <FaqBody />
      <AboutHead />
    </>
  );
};
