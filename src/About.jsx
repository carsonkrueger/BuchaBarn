import React from "react";

import AboutHead from "./components/AboutHead";
import AboutBody from "./components/AboutBody";

const Home = (props) => {
  return (
    <>
      <AboutHead />
      <AboutBody id="aboutComponent" />
    </>
  );
};

export default Home;
