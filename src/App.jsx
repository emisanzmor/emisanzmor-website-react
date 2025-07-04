import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

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
      <LoadingScreen isVisible={isLoading} />
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
