import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // React Hook that runs once on mount
  // Waits 3 seconds, then sets isLoading to false to hide the loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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
