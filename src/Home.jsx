import React from "react";

import TitleHead from "./components/TitleHead";
import FaqBody from "./components/FaqBody";

const Home = (props) => {
  return (
    <>
      <TitleHead />
      <FaqBody id="faqComponent" />
    </>
  );
};

export default Home;
