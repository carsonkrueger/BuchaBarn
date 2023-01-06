import React, { createRef } from "react";
import { Route, Routes } from "react-router-dom";

import "./styles/app.css";
import Navbar from "./components/Navbar";

import Home from "./Home";
import Shop from "./Shop";
import About from "./About";

const App = (props) => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Shop" element={<Shop />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </>
  );
};

export default App;
