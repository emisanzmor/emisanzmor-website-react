import React from "react";

const ProjectItem = ({ title, image }) => {
  return (
    // Main container
    <div className="flex flex-col md:flex-row items-stretch w-full bg-amber-50">
      {/* Left side: text */}
      <div className="bg-black text-white py-6 px-4 sm:pt-2 sm:pb-8 sm:pl-8 md:w-1/3 w-full flex flex-col justify-start items-start border-t border-white/10">
        <h3 className="text-base font-medium">{title}</h3>
      </div>
      {/* Right side: image */}
      <div className="md:w-2/3 w-full h-[250px] sm:h-[350px] md:h-auto overflow-hidden cursor-pointer group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-100 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default ProjectItem;
