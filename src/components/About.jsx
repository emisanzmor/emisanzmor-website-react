import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useLoadingNavigate from "../hooks/useLoadingNavigate";

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
      className="min-h-[70vh] sm:min-h-[74vh] flex flex-col justify-start pt-16 pb-4 px-4 sm:px-8 mb-60 max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="text-justify w-[450px] max-w-lg font-base flex flex-col items-start mt-50"
        variants={containerVariants}
      >
        <motion.p
          className="text-base sm:text-base leading-relaxed text-white mb-8"
          variants={itemVariants}
        >
          I'm a mobile developer passionate about building digital experiences
          that truly connect with users. While mobile is my core strength, I'm
          currently expanding into web development with React.
        </motion.p>

        <motion.p
          className="text-base sm:text-base leading-relaxed text-gray-300"
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

      {/* Profile Pic placeholder */}
      <div className="absolute bottom-[-70px] left-2 sm:left-2">
        <div className="border-t border-white/10 w-full mb-8" />

        <p className="text-sm text-gray-400 ml-2 mb-[-36px]">
          MOBILE · WEB DEVELOPER
        </p>

        <h2 className="text-[48px] sm:text-[120px] md:text-[147px] font-bold tracking-[-4px] text-[#e5e5e5] mb-4">
          EMILIANO SANCHEZ
        </h2>
      </div>
    </motion.section>
  );
};

export default About;
