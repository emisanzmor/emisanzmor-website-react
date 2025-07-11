import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

const LoadingScreen = ({
  isVisible,
  isExiting,
  setIsExiting,
  setIsLoading,
}) => {
  const [shouldRender, setShouldRender] = useState(isVisible);
  const [animationPhase, setAnimationPhase] = useState("fadeIn"); // 'fadeIn', 'fadeOut', 'hidden'
  const location = useLocation();
  const prevLocationRef = useRef(location.pathname);

  // Refs for timeouts
  const fadeOutTimeoutRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  const isHome = location.pathname === "/";

  // Clear all timeouts on unmount or change
  const clearAllTimeouts = () => {
    if (fadeOutTimeoutRef.current) {
      clearTimeout(fadeOutTimeoutRef.current);
      fadeOutTimeoutRef.current = null;
    }
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    if (isVisible && !isExiting) {
      // Shows loading screen
      setShouldRender(true);
      setAnimationPhase("fadeIn");

      console.log("Iniciando loading screen");
    }
  }, [isVisible, isExiting]);

  useEffect(() => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }

    if (shouldRender && !isExiting) {
      // Fadeout after 2 seconds
      fadeOutTimeoutRef.current = setTimeout(() => {
        setAnimationPhase("fadeOut");
        setIsExiting(true);

        console.log("Iniciando fade out");
        console.log("isVisible:", isVisible);
        console.log("isExiting:", isExiting);
        console.log("shouldRender:", shouldRender);
      }, 2000);
    }
  }, [shouldRender, isExiting]);

  useEffect(() => {
    if (!shouldRender) return;

    // Timeout after animation
    hideTimeoutRef.current = setTimeout(() => {
      setShouldRender(false);
      setIsLoading(false);
      setIsExiting(false);
      setAnimationPhase("hidden");

      console.log("Loading screen oculto completamente");
      console.log("isVisible:", isVisible);
      console.log("isExiting:", isExiting);
      console.log("shouldRender:", shouldRender);
    }, 3000);
  }, [shouldRender]);

  useEffect(() => {
    return clearAllTimeouts;
  }, []);

  const getAnimationClasses = () => {
    if (animationPhase === "fadeIn") {
      if (isHome) {
        return "animate-fade-in animate-duration-[1000ms] animate-ease-in-out";
      } else {
        return "animate-fade-to-black animate-duration-[1000ms] animate-ease-in-out";
      }
    } else if (animationPhase === "fadeOut") {
      if (isHome) {
        return "animate-fade-up animate-duration-[2000ms] animate-delay-[500ms] animate-ease-in-out";
      } else {
        return "animate-fade-from-black animate-duration-[2000ms] animate-ease-in-out";
      }
    }
    return "";
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black ${getAnimationClasses()}`}
      // Temporary fix for unresponsive Projects page
      style={{
        pointerEvents: animationPhase === "fadeOut" ? "none" : "auto",
      }}
    >
      {/* Content */}
      <div className="text-center">
        {/* emisanzmor - Title */}
        <h1 className="text-5xl font-bold animate-pulse text-white mb-4 tracking-[-4px]">
          emisanzmor.
        </h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
