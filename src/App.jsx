import React, { useRef, createRef } from "react";

import "./styles/app.css";

import Navbar from "./components/Navbar";
import TitleHead from "./components/TitleHead";
import FaqBody from "./components/FaqBody";
import AboutHead from "./components/AboutHead";
import AboutBody from "./components/AboutBody";

export default () => {
  // const aboutRef = useRef(document.getElementById("aboutComponent"));
  // const faqRef = useRef(document.getElementById("faqComponent"));
  // const ref = createRef(null);
  const ref = useRef();

  return (
    <>
      <Navbar aboutRef={ref.current} />
      <TitleHead />
      <FaqBody id="faqComponent" />
      <AboutHead />
      <AboutBody ref={ref} id="aboutComponent" />
    </>
  );
};
