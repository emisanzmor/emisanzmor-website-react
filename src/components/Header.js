import React from "react";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: 600,
            letterSpacing: "-4px",
            margin: "2rem 2rem 0 2rem",
            lineHeight: 1,
          }}
        >
          emisanzmor.
        </h1>
        <span
          style={{
            fontSize: "0.9rem",
            fontWeight: 400,
            margin: "0.05rem 0 0 2rem",
            letterSpacing: "0px",
          }}
        >
          portfolio
        </span>
      </div>
      <nav
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          marginTop: "1rem",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "4rem",
            margin: "1.5rem 5.5rem 0 0",
          }}
        >
          <li>
            <a
              href="#about"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 450,
                letterSpacing: "0px",
                transition: "color 0.2s",
              }}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 450,
                letterSpacing: "0px",
                transition: "color 0.2s",
              }}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 450,
                letterSpacing: "0px",
                transition: "color 0.2s",
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
