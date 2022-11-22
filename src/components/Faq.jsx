import React, { useState } from "react";

import "../styles/faq.css";

export default ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div class="faq">
      <a id="question">{question}</a>
      <p id="answer">{answer}</p>
    </div>
  );
};
