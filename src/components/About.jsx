import React from "react";
import SocialLinks from "./SocialLinks";

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
        borderTop: "1px solid #999",
        marginTop: "2rem",
      }}
    >
      <div
        style={{
          marginLeft: "2rem",
        }}
      >
        <h2
          style={{
            fontSize: "6rem",
            fontWeight: 800,
            letterSpacing: "-6px",
            color: "#e5e5e5",
            marginBottom: "-1rem",
          }}
        >
          emisanzmor
        </h2>
        <p
          style={{
            fontWeight: 450,
            fontSize: "0.99rem",
          }}
        >
          [ Mobile Developer ]
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          marginTop: "1rem",
        }}
      >
        <div
          style={{
            margin: "4rem 5rem 0 2rem",
            maxWidth: "800px",
            textAlign: "justify",
          }}
        >
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.6rem",
              color: "#ccc",
              fontWeight: 400,
              marginBottom: "2rem",
            }}
          >
            I’m a mobile developer passionate about building digital experiences
            that truly connect with users. While mobile is my core strength, I’m
            currently expanding into web development with React.
          </p>
          <p
            style={{
              fontSize: "1.025rem",
              lineHeight: "1.6",
              fontWeight: 500,
              color: "#999",
            }}
          >
            Outside of coding, I explore emerging tech and build side projects
            that challenge and inspire me to keep growing as a developer.
          </p>

          <div
            style={{
              marginTop: "6rem",
            }}
          >
            <SocialLinks />
          </div>
        </div>
        {/* Profile Pic placeholder */}
      </div>
    </section>
  );
};

export default About;
