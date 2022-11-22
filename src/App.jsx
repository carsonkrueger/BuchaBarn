import React, { useRef } from "react";

import "./styles/app.css";

import Navbar from "./components/Navbar";
import Body from "./components/Body";
import FaqBody from "./components/FaqBody";

export default () => {
  const faqRef = useRef(null);

  return (
    <>
      <Navbar scrollFaq={faqRef} />
      <Body ref={faqRef} />
      <FaqBody />
    </>
  );
};
