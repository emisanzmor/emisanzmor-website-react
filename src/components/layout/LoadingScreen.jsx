import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const LoadingScreen = ({ isVisible, setIsLoading }) => {
  const [shouldRender, setShouldRender] = useState(isVisible);
  const [isExiting, setIsExiting] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef(null);

  // Clear timeout helper
  const clearCurrentTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Handle route changes and visibility
  useEffect(() => {
    clearCurrentTimeout();

    if (isVisible) {
      setShouldRender(true);
      setIsExiting(false);

      // Start exit animation after 2 seconds
      timeoutRef.current = setTimeout(() => {
        setIsExiting(true);
      }, 2000);
    }

    return clearCurrentTimeout;
  }, [location.pathname, isVisible]);

  // Handle exit animation completion
  const handleExitComplete = () => {
    setShouldRender(false);
    setIsLoading(false);
    setIsExiting(false);
  };

  // Cleanup on unmount
  useEffect(() => {
    return clearCurrentTimeout;
  }, []);

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {shouldRender && !isExiting && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4 },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6 },
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            className="absolute inset-0 bg-black z-0"
          />

          <div className="relative z-10 text-center">
            <motion.h1
              className="text-5xl font-bold text-white mb-4 tracking-[-4px]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { delay: 0.3, duration: 0.6 },
              }}
            >
              emisanzmor.
            </motion.h1>
            <motion.div
              className="w-16 h-1 bg-white mx-auto mt-8"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: 1,
                transition: { delay: 0.8, duration: 0.8 },
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
