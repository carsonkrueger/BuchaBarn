import React from "react";
import { motion } from "framer-motion";

/*
    This Component is used tp create collapsible elements.
    Simply pass in a bool to the isOpen prop and the rest will be taken care of.
*/

export default (props) => {
  return (
    <motion.div
      animate={{
        height: props.isOpen ? "auto" : 0,
        opacity: props.isOpen ? 1 : 0,
        transition: {
          height: {
            duration: 0.4,
          },
          opacity: {
            duration: 0.25,
          },
        },
      }}
    >
      {props.children}
    </motion.div>
  );
};
