import { motion } from "framer-motion";
import React from "react";

function Marquee({ images ,from , to}) {
  return (
    <div className="MyGradient hidden  md:flex  w-full py-8  overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex  flex-shrink-0"
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {images.map((image, index) => (
          <img src={image} alt="" key={index} className="w-56 pr-20 " />
        ))}
      </motion.div>
      <motion.div
        className="flex  flex-shrink-0"
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {images.map((image, index) => (
          <img src={image} alt="" key={index} className="w-56 pr-20 " />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
