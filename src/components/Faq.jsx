import React, { useEffect, useState } from "react";

import "../styles/faq.css";
import plus from "../images/plus.png";
import minus from "../images/minus.png";

import Collapsible from "./Collapsible";

export default ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickFaq = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="faq">
      <a className="question" href="#" onClick={(e) => onClickFaq(e)}>
        <img src={plus} />
        {question}
      </a>
      <Collapsible isOpen={isOpen}>
        <p className="answer">{answer}</p>
      </Collapsible>
    </div>
  );
};
