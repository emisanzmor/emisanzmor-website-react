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
      className="min-h-screen flex flex-col justify-start pt-4 pb-[env(safe-area-inset-bottom)] px-12 sm:min-h-[74vh] sm:pt-16 sm:pb-4 sm:px-8 sm:mb-60 sm:max-w-6xl mx-auto "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex flex-col items-start text-justify w-full max-w-xs mt-40 sm:w-[450px] sm:max-w-md sm:mt-50"
        variants={containerVariants}
      >
        <motion.p
          className="text-sm sm:text-base leading-relaxed text-white mb-8"
          variants={itemVariants}
        >
          I'm a mobile developer passionate about building digital experiences
          that truly connect with users. While mobile is my core strength, I'm
          currently expanding into web development with React.
        </motion.p>

        <motion.p
          className="text-sm sm:text-base leading-relaxed text-gray-300"
          variants={itemVariants}
        >
          Outside of coding, I explore emerging tech and build side projects
          that challenge and inspire me to keep growing as a developer.
        </motion.p>

        <motion.button
          onClick={() => navigateWithLoading("/projects")}
          className="mt-6 text-sm no-underline visited:text-white !text-white hover:text-white font-medium transition-all duration-300 ease-in-out hover:scale-105"
          style={{ background: "none" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View my work →
        </motion.button>
      </motion.div>

      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-screen sm:absolute sm:bottom-[20px]">
        <Ticker className="mb-5" />
        <div className="border-t border-white/10 w-full mb-4" />
        <p className="text-xs ml-2 -mb-2 text-gray-400 sm:ml-4 sm:mb-[-36px] sm:text-sm">
          MOBILE · WEB DEVELOPER
        </p>

        <h2 className="w-full text-[45px] ml-1 font-bold tracking-[-4px] text-[#e5e5e5] sm:text-[147px] sm:mb-4 sm:ml-2">
          EMILIANO SANCHEZ
        </h2>
      </div>
    </motion.section>
  );
};

export default About;
