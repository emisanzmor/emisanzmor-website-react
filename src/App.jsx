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

  useEffect(() => {
    document.documentElement.style.backgroundColor = "#000000";
    document.body.style.backgroundColor = "#000000";
    document.body.style.margin = "0";
    document.body.style.padding = "0";

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
    <>
      <div
        className="relative bg-black text-white w-full overflow-x-hidden font-sans"
        style={{
          fontFamily: '"Helvetica Neue", Arial, sans-serif',
        }}
      >
        <Router>
          <LoadingScreen isVisible={isLoading} setIsLoading={setIsLoading} />

          {!isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 min-h-screen flex flex-col"
            >
              <Header setIsLoading={setIsLoading} />

              <main className="flex-1 w-full overflow-x-hidden">
                <Routes>
                  <Route
                    path="/"
                    element={<About setIsLoading={setIsLoading} />}
                  />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>

              <Footer />
            </motion.div>
          )}
        </Router>
      </div>
    </>
  );
}

export default App;
