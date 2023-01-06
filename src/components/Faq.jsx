import React, { useRef } from "react";
import { motion } from "framer-motion";

import "../styles/faq.css";
import plus from "../images/plus.png";
import minus from "../images/minus.png";

import Collapsible from "./Collapsible";

export default ({ idx, openIdx, setOpenIdx, question, answer }) => {
  const isOpened = useRef();

  const onClickFaq = (e) => {
    e.preventDefault();
    if (idx === openIdx) {
      setOpenIdx(null);
    } else {
      setOpenIdx(idx);
    }
  };

  return (
    <div className="faq">
      <a className="question" href="#" onClick={(e) => onClickFaq(e)}>
        <img
          // animate={{ rotate: openIdx === idx ? 180 : -180 }}
          src={openIdx === idx ? minus : plus}
        />
        {question}
      </a>
      <Collapsible isOpen={openIdx === idx}>
        <p className="answer">{answer}</p>
      </Collapsible>
    </div>
  );
};
