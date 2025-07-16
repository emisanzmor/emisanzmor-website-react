import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useLoadingNavigate from "../hooks/useLoadingNavigate";
import Ticker from "./Ticker";

const About = ({ setIsLoading }) => {
  const navigateWithLoading = useLoadingNavigate(setIsLoading);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const nameVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };

  return (
    <motion.section
      id="about"
      className="min-h-[85vh] flex flex-col justify-between pt-4 pb-[env(safe-area-inset-bottom)] px-6 relative sm:min-h-[74vh] sm:pt-16 sm:pb-4 sm:px-8 sm:mb-60 sm:max-w-6xl sm:mx-auto sm:flex-col sm:justify-start"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="py-25 flex flex-col items-start text-justify w-full mt-24 sm:w-[450px] sm:max-w-md sm:mt-50 sm:py-0"
        variants={containerVariants}
      >
        <motion.p
          className="text-sm leading-relaxed text-white mb-6 sm:text-base sm:mb-8"
          variants={itemVariants}
        >
          I'm a mobile developer passionate about building digital experiences
          that truly connect with users. While mobile is my core strength, I'm
          currently expanding into web development with React.
        </motion.p>

        <motion.p
          className="text-sm leading-relaxed text-gray-300 mb-6 sm:text-base sm:mb-8"
          variants={itemVariants}
        >
          Outside of coding, I explore emerging tech and build side projects
          that challenge and inspire me to keep growing as a developer.
        </motion.p>

        <motion.button
          onClick={() => navigateWithLoading("/projects")}
          className="text-sm no-underline visited:text-white !text-white hover:text-white font-medium transition-all duration-300 ease-in-out hover:scale-105 bg-transparent border-none cursor-pointer p-0 sm:mt-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ background: "none" }}
        >
          View my work →
        </motion.button>
      </motion.div>

      <motion.div
        className="w-full sm:absolute sm:bottom-[-250px] sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:w-screen sm:pb-0"
        variants={itemVariants}
      >
        <Ticker className="mb-3 sm:mb-5" />
        <div className="border-t border-white/10 w-full mb-4" />

        <div className="px-0 sm:px-4">
          <p className="mb-3 text-xs text-gray-400 sm:text-sm sm:ml-3 sm:mb-[-5px]">
            MOBILE · WEB DEVELOPER
          </p>

          <h2 className="text-[32px] leading-[28px] font-bold tracking-[-2px] text-[#e5e5e5] sm:text-[145px] sm:ml-1 sm:leading-none sm:tracking-[-4px]">
            EMILIANO SANCHEZ
          </h2>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
