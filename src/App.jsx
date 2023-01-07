import React, { createRef } from "react";
import { Route, Routes } from "react-router-dom";

import "./styles/app.css";
import Navbar from "./components/Navbar";

import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Contact from "./Contact";
import Footer from "./components/Footer";

const App = (props) => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Shop" element={<Shop />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>

      {/* <Footer /> */}
    </>
  );
};

export default App;
