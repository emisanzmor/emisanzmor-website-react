import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import ProjectsPage from "./pages/ProjectsPage";
import Contact from "./components/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  // Deactivate overflow during Loading Screen
  /*useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";

      return () => (document.body.style.overflow = "auto");
    }
  }, [isLoading]); */

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
        <LoadingScreen
          isVisible={isLoading}
          isExiting={isExiting}
          setIsExiting={setIsExiting}
          setIsLoading={setIsLoading}
        />
        <Header setIsLoading={setIsLoading} /> {/* Header section */}
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer /> {/* Footer Section */}
      </Router>
    </div>
  );
}

export default App;
