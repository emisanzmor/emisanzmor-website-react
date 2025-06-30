import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{
        background: "#111",
        color: "#fff",
        fontFamily: '"Helvetica Neue", Arial, sans-serif',
        margin: 0,
        padding: 0,
        minHeight: "100vh",
      }}
    >
      <Header /> {/* Header section */}
      <main>
        <Hero /> {/* Hero section */}
        <Projects /> {/* Projects section */}
        <About /> {/* About section */}
      </main>
      <Footer /> {/* Footer Section */}
    </div>
  );
}

export default App;
