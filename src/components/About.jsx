import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="min-h-[70vh] sm:min-h-[74vh] flex flex-col justify-start pt-16 pb-4 px-4 sm:px-8 mb-60 max-w-6xl mx-auto"
    >
      <div className="text-justify w-[450px] max-w-lg font-base flex flex-col items-start mt-50">
        <p className="text-base sm:text-base leading-relaxed text-white mb-8">
          I’m a mobilee developer passionate about building digital experiences
          that truly connect with users. While mobile is my core strength, I’m
          currently expanding into web development with React.
        </p>
        <p className="text-base sm:text-base leading-relaxed text-gray-300">
          Outside of coding, I explore emerging tech and build side projects
          that challenge and inspire me to keep growing as a developer.
        </p>
        <a
          href="/projects"
          className="mt-6 text-sm no-underline visited:text-white !text-white hover:text-white font-medium transition-all duration-300 ease-in-out hover:scale-105"
        >
          View my work →
        </a>
      </div>
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
