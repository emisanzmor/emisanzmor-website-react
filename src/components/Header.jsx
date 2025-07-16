import React from "react";
import { motion } from "framer-motion";
import useLoadingNavigate from "../hooks/useLoadingNavigate";

const Header = ({ setIsLoading }) => {
  const navigateWithLoading = useLoadingNavigate(setIsLoading);

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      color: "#888",
      transition: {
        duration: 0.1,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full flex flex-col sm:flex-row items-start justify-between z-50 pt-[env(safe-area-inset-top)] bg-black pb-4 px-4 sm:px-8"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex flex-col items-center w-full sm:w-auto "
        variants={titleVariants}
      >
        <motion.h1
          className=" text-2xl sm:text-4xl lg:text-5xl mt-4 font-semibold -tracking-wider leading-none text-white"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
        >
          emisanzmor.
        </motion.h1>
      </motion.div>

      <motion.nav
        className="w-full sm:w-auto flex justify-center sm:justify-end items-start mt-2 sm:mt-2"
        variants={navVariants}
      >
        <motion.ul className="list-none flex gap-6 sm:gap-12 lg:gap-24 mt-2 sm:mt-4">
          {[
            { text: "about", path: "/" },
            { text: "projects", path: "/projects" },
            { text: "contact", path: "/contact" },
          ].map((item, index) => (
            <motion.li key={index} variants={navItemVariants}>
              <motion.div className="relative">
                <motion.button
                  onClick={() => navigateWithLoading(item.path)}
                  className="bg-transparent border-none text-white text-sm sm:text-base font-normal cursor-pointer relative px-2 py-1"
                  variants={navItemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{
                    background: "none",
                  }}
                >
                  {item.text}
                </motion.button>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
