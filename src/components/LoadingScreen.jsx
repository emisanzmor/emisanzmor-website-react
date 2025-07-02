const LoadingScreen = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    // Main div: Full Screen Overlay
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Content*/}
      <div className="text-white text-center">
        {/*  emisanzmor - Title */}
        <div className="text-6xl font-bold animate-pulse mb-4">emisanzmor</div>
        {/* Loading bar */}
        <div className="w-32 h-1 bg-white mx-auto overflow-hidden ">
          {/* Loading bar animation */}
          <div className="w-full h-full bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
