import React from "react";

const ProjectItem = ({ title, image }) => {
  return (
    <div
      style={{
        background: "#181818",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "transform 0.1s",
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = "scale(1)";
      }}
    >
      <div
        style={{
          fontSize: "1rem",
          color: "#667",
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default ProjectItem;
