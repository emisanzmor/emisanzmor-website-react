import React from "react";

const Hero = () => {
  return (
    <section
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "6rem 2rem",
      }}
    >
      <h2
        style={{
          fontSize: "15.1rem",
          fontWeight: 700,
          margin: 0,
          lineHeight: 1.1,
          maxWidth: "100vw",
          overflow: "hidden",
          letterSpacing: "-2px",
        }}
      >
        Crafting Experiences
      </h2>
    </section>
  );
};

export default Hero;
