import React from "react";
import useDelayedNavigate from "./useDelayedNavigate"; // Ajusta la ruta si está en otra carpeta
import { useState } from "react";

const Header = ({ setIsLoading }) => {
  const delayedNavigate = useDelayedNavigate(() => {
    setIsLoading(true);
  }, 1000);

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
            <button
              onClick={() => delayedNavigate("/")}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 450,
                letterSpacing: "0px",
                transition: "color 0.2s",
                cursor: "pointer",
              }}
            >
              about
            </button>
          </li>

          <li>
            <button
              onClick={() => delayedNavigate("/projects")}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 450,
                letterSpacing: "0px",
                transition: "color 0.2s",
                cursor: "pointer",
              }}
            >
              projects
            </button>
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
