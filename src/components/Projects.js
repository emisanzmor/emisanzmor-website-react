import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const projectsData = [
    { id: 1, title: "Project 1", image: "/images/blanksquare.png" },
    { id: 2, title: "Project 2", image: "/images/blanksquare.png" },
    { id: 3, title: "Project 3", image: "/images/blanksquare.png" },
    { id: 4, title: "Project 4", image: "/images/blanksquare.png" },
    { id: 5, title: "Project 5", image: "/images/blanksquare.png" },
    { id: 6, title: "Project 6", image: "/images/blanksquare.png" },
    { id: 7, title: "Project 7", image: "/images/blanksquare.png" },
    { id: 8, title: "Project 8", image: "/images/blanksquare.png" },
  ];

  return (
    <section
      id="projects"
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "2rem 2rem",
        borderTop: "1px solid #222",
        margintop: "2rem",
      }}
    >
      <h2
        style={{
          fontSize: "4rem",
          fontWeight: 600,
          letterSpacing: "-4px",
          margin: "2rem 2rem 0 2rem",
        }}
      >
        projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr",
          gridTemplateRows: "repeat(3, 250px)",
          gap: "30px",
          marginTop: "10rem",
        }}
      >
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
