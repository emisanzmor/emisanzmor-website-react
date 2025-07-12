import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import ProjectsPage from "./pages/ProjectsPage";
import Contact from "./components/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Disabling scroll during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

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
        <LoadingScreen isVisible={isLoading} setIsLoading={setIsLoading} />

        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Header setIsLoading={setIsLoading} />
            <main>
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </motion.div>
        )}
      </Router>
    </div>
  );
}

export default App;
