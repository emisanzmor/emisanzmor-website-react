import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useLoadingNavigate from "../../hooks/useLoadingNavigate";
import Ticker from "../layout/Ticker";
import useDownloadCV from "../../hooks/useDownloadCV";

const About = ({ setIsLoading }) => {
  const navigateWithLoading = useLoadingNavigate(setIsLoading);
  const downloadCV = useDownloadCV();

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

  return (
    <motion.section
      id="about"
      className="min-h-[85vh] flex flex-col justify-between pt-4 pb-[env(safe-area-inset-bottom)] px-6 relative lg:min-h-[74vh] lg:pt-16 lg:pb-4 lg:px-8 lg:mb-60 lg:max-w-6xl lg:mx-auto lg:flex-col lg:justify-start"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="py-25 flex flex-col items-start text-justify w-full mt-24 lg:w-[450px] lg:max-w-md lg:mt-50 lg:py-0"
        variants={containerVariants}
      >
        <motion.p
          className="text-sm leading-relaxed text-white mb-6 lg:text-base lg:mb-8"
          variants={itemVariants}
        >
          I'm a mobile developer passionate about building digital experiences
          that truly connect with users. While mobile is my core strength, I'm
          currently expanding into web development with React.
        </motion.p>

        <motion.p
          className="text-sm leading-relaxed text-gray-300 mb-6 lg:text-base lg:mb-8"
          variants={itemVariants}
        >
          Outside of coding, I explore emerging tech and build side projects
          that challenge and inspire me to keep growing as a developer.
        </motion.p>
        <motion.div className="flex flex-row gap-4 lg:mt-6">
          <motion.button
            onClick={() => navigateWithLoading("/projects")}
            className="text-sm no-underline visited:text-white !text-white hover:text-white font-medium transition-all duration-300 ease-in-out hover:scale-105 bg-transparent border-none cursor-pointer p-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ background: "none" }}
          >
            View my work →
          </motion.button>
          <motion.button
            onClick={downloadCV}
            className="text-sm font-medium text-white hover:text-gray-300 transition-all duration-300 ease-in-out hover:scale-105 bg-transparent border !border-white/10 hover:border-white/40 px-4 py-2 rounded-md cursor-pointer"
            style={{ background: "none" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full lg:absolute lg:bottom-[-250px] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-screen lg:pb-0"
        variants={itemVariants}
      >
        <Ticker className="mb-3 lg:mb-5" />
        <div className="border-t border-white/10 w-full mb-4" />

        <div className="px-0 lg:px-4">
          <p className="mb-3 text-xs text-gray-400 lg:text-sm lg:ml-3 lg:mb-[-5px]">
            MOBILE · WEB DEVELOPER
          </p>

          <h2 className="text-[32px] leading-[28px] font-bold tracking-[-2px] text-[#e5e5e5] lg:text-[145px] lg:ml-1 lg:leading-none lg:tracking-[-4px]">
            EMILIANO SANCHEZ
          </h2>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
