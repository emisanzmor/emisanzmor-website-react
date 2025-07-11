import React from "react";
import ProjectItem from "./ProjectItem";

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
      <h2 className="text-[64px] font-bold tracking-[-4px] text-[#e5e5e5] ml-8 mb-56 mt-28">
        projects
      </h2>

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
