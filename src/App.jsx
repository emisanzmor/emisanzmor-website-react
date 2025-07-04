import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Projects from "./components/Projects";

import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Deactivate overflow during Loading Screen
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";

      return () => (document.body.style.overflow = "auto");
    }
  }, [isLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loading screen for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="bg-black"
      style={{
        color: "#fff",
        fontFamily: '"Helvetica Neue", Arial, sans-serif',
        margin: 0,
        padding: 0,
        minHeight: "100vh",
      }}
    >
      <Router>
        <LoadingScreen isVisible={isLoading} />
        <Header /> {/* Header section */}
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </main>
        <Footer /> {/* Footer Section */}
      </Router>
    </div>
  );
}

export default App;
