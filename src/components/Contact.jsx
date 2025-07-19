import React from "react";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

const Contact = () => {
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

  const titleVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="contact"
      className="bg-black text-white min-h-screen flex flex-col justify-between pt-40 pb-[env(safe-area-inset-bottom)] lg:pt-30 lg:min-h-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="relative px-6 mb-5 lg:h-[400px] lg:ml-4 lg:mt-4 lg:px-0"
        variants={titleVariants}
      >
        <motion.h1 className="text-[48px] leading-[40px] font-bold tracking-[-2px] text-[#e5e5e5] mb-4 lg:text-[290px] lg:pb-8 lg:ml-4 lg:mt-4 lg:px-3 0 lg:tracking-[-4px] lg:leading-none">
          contact
        </motion.h1>
      </motion.div>

      <motion.div
        className="border-t border-white/10 flex-1 px-6 lg:px-8"
        variants={containerVariants}
      >
        <div className="pt-8 lg:p-8">
          <motion.div className="mb-6" variants={itemVariants}>
            <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-0">
              <motion.p className="text-[28px] leading-[24px] font-semibold break-words lg:text-8xl lg:leading-none">
                EMILIANO SANCHEZ
              </motion.p>
              <motion.p
                className="text-xs font-medium text-gray-400 lg:text-base lg:pt-2 lg:pl-2 lg:text-white"
                variants={itemVariants}
              >
                [emisanzmor]
              </motion.p>
            </div>
          </motion.div>

          <motion.p
            className="text-xs text-gray-400 mb-8 tracking-wide lg:text-sm lg:mb-6"
            variants={itemVariants}
          >
            MOBILE · WEB DEVELOPER
          </motion.p>

          <motion.div className="mt-auto" variants={itemVariants}>
            <SocialLinks />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="px-6 py-6 border-t border-white/10 lg:hidden"
        variants={itemVariants}
      >
        <motion.p
          className="text-sm text-gray-300 text-center mb-4"
          variants={itemVariants}
        >
          Let's work together
        </motion.p>
        <motion.div className="flex justify-center" variants={itemVariants}>
          <motion.a
            href="mailto:emisn1501@gmail.com"
            className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-200 active:scale-95"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
