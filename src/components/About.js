import React from "react";

const About = () => {
  return (
    <section
      id="about"
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "2rem 2rem",
        borderTop: "1px solid #222",
        marginTop: "2rem",
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
        about me
      </h2>
      <div
        style={{
          margin: "4rem 0 0 2rem",
          maxWidth: "800px",
        }}
      >
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.6rem",
            color: "#ccc",
            marginBottom: "2rem",
          }}
        >
          I’m a mobile developer passionate about creating digital experiences
          that connect with people. I specialize in mobile development and am
          currently exploring the world of web development with React.
        </p>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            color: "#999",
          }}
        >
          Outside of coding, I enjoy exploring emerging technologies and
          building personal projects that push me to grow as a developer.
        </p>
      </div>
    </section>
  );
};

export default About;
