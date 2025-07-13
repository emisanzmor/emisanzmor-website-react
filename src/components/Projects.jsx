import React from "react";
import ProjectItem from "./ProjectItem";
import { delay, motion } from "framer-motion";

const Projects = () => {
  const projectsData = [
    { id: 1, title: "Project", image: "/images/blanksquare.png" },
    { id: 2, title: "Project", image: "/images/blanksquare.png" },
    { id: 3, title: "Project", image: "/images/blanksquare.png" },
    { id: 4, title: "Project", image: "/images/blanksquare.png" },
    { id: 5, title: "Project", image: "/images/blanksquare.png" },
    { id: 6, title: "Project", image: "/images/blanksquare.png" },
    { id: 7, title: "Project", image: "/images/blanksquare.png" },
    { id: 8, title: "Project", image: "/images/blanksquare.png" },
  ];

  return (
    <section
      id="projects"
      className="min-h-[70vh] flex flex-col justify-start px-8 pt-8"
    >
      <div className="relative h-[400px] ml-4 mt-4">
        <h1 className="text-[290px] font-bold tracking-[-4px] text-[#e5e5e5] z-0">
          projects
        </h1>
      </div>

      <div className="flex flex-col">
        {projectsData.map((project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
