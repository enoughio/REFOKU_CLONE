import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ item }) => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", duration: 5, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {item.map((url, index) => (
          <img key={index} src={url} />
        ))}
       
      </motion.div>
    </div>
  );
  
};

export default Marquee;
