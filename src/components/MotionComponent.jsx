import React from 'react';
import { motion } from "framer-motion";

const Motioncomponent = ({children}) => {
    return (
        <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={{
          in: {
            opacity: 1,
            x: 0,
          },
          out: {
            opacity: 0,
            x: "-100vw",
          },
        }}
        transition={{
          type: "spring",
          stiffness: 50,
        }}
        style={{
          height: "100%",
          justifyContent: "center",
          alignSelf: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
            {children}
        </motion.div>
    );
}

export default Motioncomponent;
