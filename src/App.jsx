import React, { createRef } from "react";

import "./styles/app.css";

import Navbar from "./components/Navbar";
import TitleHead from "./components/TitleHead";
import FaqBody from "./components/FaqBody";
import AboutHead from "./components/AboutHead";
import AboutBody from "./components/AboutBody";

const App = React.forwardRef((props, ref) => {
  // const aboutRef = useRef(document.getElementById("aboutComponent"));
  // const faqRef = useRef(document.getElementById("faqComponent"));
  // const ref = createRef(null);
  const aboutRef = createRef();
  const faqRef = createRef();

  return (
    <>
      <Navbar faqRef={faqRef} aboutRef={aboutRef} />
      <TitleHead />
      <FaqBody ref={faqRef} id="faqComponent" />
      <AboutHead />
      <AboutBody ref={aboutRef} id="aboutComponent" />
    </>
  );
});

export default App;
