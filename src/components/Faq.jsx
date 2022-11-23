import React, { useRef } from "react";

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
        <img src={plus} />
        {question}
      </a>
      <Collapsible isOpen={openIdx === idx}>
        <p className="answer">{answer}</p>
      </Collapsible>
    </div>
  );
};
