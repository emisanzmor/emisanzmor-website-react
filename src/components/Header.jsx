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
      className="fixed top-0 left-0 w-full flex items-start justify-start z-50 pt-[env(safe-area-inset-top)] bg-black pb-4"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex flex-col items-start ml-8"
        variants={titleVariants}
      >
        <motion.h1
          className="text-4xl mt-4 font-semibold -tracking-wider sm:text-5xl leading-none text-white"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
        >
          emisanzmor.
        </motion.h1>
      </motion.div>

      <motion.nav
        className="w-full flex justify-end items-start mt-4"
        variants={navVariants}
      >
        <motion.ul className="list-none flex gap-24 mt-4 mr-12">
          {[
            { text: "about", path: "/" },
            { text: "projects", path: "/projects" },
            { text: "contact", path: "/contact" },
          ].map((item, index) => (
            <motion.li key={index} variants={navItemVariants}>
              <motion.div className="relative">
                <motion.button
                  onClick={() => navigateWithLoading(item.path)}
                  className="bg-transparent border-none text-white text-base font-normal cursor-pointer relative"
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
