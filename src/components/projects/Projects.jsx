import React from "react";
import placeholder from "../../assets/emisanzmor_placeholder.png";
import ProjectItem from "./ProjectItem";
import { motion } from "framer-motion";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "P1-3ES",
      image: placeholder,
    },
    { id: 2, title: "P2-UXD", image: placeholder },
    { id: 3, title: "P3-NV7", image: placeholder },
    { id: 4, title: "P4-KAI", image: placeholder },
    { id: 5, title: "P5-ZNT", image: placeholder },
    { id: 6, title: "P6-AUR", image: placeholder },
    { id: 7, title: "P7-RXN", image: placeholder },
    { id: 8, title: "P8-SLC", image: placeholder },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const projectsListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.section
      id="projects"
      className="min-h-screen flex flex-col pt-40 pb-[env(safe-area-inset-bottom)] lg:min-h-[70vh] lg:pt-30 lg:pb-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="relative px-6 mb-8 lg:h-[400px] lg:ml-4 lg:mt-4 lg:px-0"
        variants={titleVariants}
      >
        <motion.h1 className="text-[48px] leading-[40px] font-bold tracking-[-2px] text-[#e5e5e5] mb-4 lg:text-[290px] lg:tracking-[-4px] lg:z-0 lg:px-3 lg:mb-0 lg:leading-none ">
          projects
        </motion.h1>
      </motion.div>

      <motion.div
        className="flex-1 px-6 lg:px-0"
        variants={projectsListVariants}
      >
        <div className="flex flex-col gap-4 lg:gap-0">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={{
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
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                },
              }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <ProjectItem title={project.title} image={project.image} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
