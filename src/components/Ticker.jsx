import React from "react";
import { motion } from "framer-motion";

const Ticker = ({ speed = 30, direction = "left", className = "" }) => {
  const tickerItems = [
    "MOBILE DEVELOPMENT",
    "iOS & ANDROID",
    "SWIFT",
    "REACT NATIVE",
    "FRONTEND DEVELOPMENT",
    "REACT.JS",
    "JAVASCRIPT",
    "HTML5",
    "CSS3",
    "UX/UI DESIGN",
    "JAVA",
    "PHP",
    "C++",
    "MYSQL",
    "LINUX",
    "FIGMA",
    "APPLE ECOSYSTEM",
    "RESPONSIVE DESIGN",
    "CROSS-PLATFORM",
    "USER-FIRST DESIGN",
  ];

  return (
    <div className={`overflow-hidden w-full ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }}
      >
        {tickerItems.map((item, index) => (
          <div
            key={`first ${index}`}
            className="flex items-center flex-shrink-0"
          >
            <span className="text-xs px-4 text-white sm:text-sm font-medium">
              {item}
            </span>
            <span className="px-2 text-gray-400">•</span>
          </div>
        ))}

        {tickerItems.map((item, index) => (
          <div
            key={`second ${index}`}
            className="flex items-center flex-shrink-0"
          >
            <span className="text-xs px-4 text-white sm:text-sm font-medium">
              {item}
            </span>
            <span className="px-2 text-gray-400">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Ticker;
