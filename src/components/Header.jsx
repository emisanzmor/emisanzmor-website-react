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
          marginLeft: "2rem",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: 600,
            letterSpacing: "-4px",
            margin: "1rem 0 0 0",
            lineHeight: 1,
          }}
        >
          emisanzmor.
        </h1>
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
            gap: "6rem",
            margin: "1rem 3rem 0 0",
          }}
        >
          <li>
            <a
              href="/"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 450,
                letterSpacing: "0px",
                transition: "color 0.2s",
              }}
            >
              about
            </a>
          </li>

          <li>
            <a
              href="/projects"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 450,
                letterSpacing: "0px",
                transition: "color 0.2s",
              }}
            >
              projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 450,
                letterSpacing: "0px",
                transition: "color 0.2s",
              }}
            >
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
