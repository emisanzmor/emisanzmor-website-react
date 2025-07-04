import React, { useEffect, useState } from "react";

const LoadingScreen = ({ isVisible }) => {
  const [shouldRender, setShouldRender] = useState(isVisible);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      setIsExiting(true);

      setTimeout(() => {
        setShouldRender(false);
      }, 1000);
    }
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      setIsExiting(false);
    }
  }, [isVisible]);

  if (!shouldRender) return null;

  return (
    // Main div: Full Screen Overlay
    <div
      className={`fixed inset-0 bg-black z-50 flex items-center justify-center ${
        isExiting
          ? "animate-fade-up animate-duration-[2000ms] animate-delay[1000ms] animate-ease-in-out"
          : ""
      }`}
    >
      {/* Content*/}
      <div className="text-white text-center">
        {/*  emisanzmor - Title */}
        <div className="text-4xl font-semibold animate-pulse mb-4">
          welcome.
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
