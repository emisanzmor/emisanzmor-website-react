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
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "2rem 2rem",
        borderTop: "1px solid #999",
        margintop: "2rem",
      }}
    >
      <h2
        style={{
          fontSize: "63.967999px",
          fontWeight: 700,
          letterSpacing: "-4px",
          color: "#e5e5e5",
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
