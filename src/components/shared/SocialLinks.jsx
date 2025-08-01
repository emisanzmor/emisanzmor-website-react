import React from "react";
import useDownloadCV from "../../hooks/useDownloadCV";

const SocialLinks = () => {
  const downloadCV = useDownloadCV();
  const socialLinks = [
    { name: "LINKEDIN", url: "https://www.linkedin.com/in/emisanzmor/" },
    { name: "GITHUB", url: "https://github.com/emisanzmor/" },
    { name: "INSTAGRAM", url: "https://www.instagram.com/emisanzmor/" },
    { name: "EMAIL", url: "mailto:emisn1501@gmail.com" },
    { name: "CV", action: downloadCV },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-start mt-[1.5rem] tracking-wide font-medium  gap-4 sm:gap-8">
      {socialLinks.map((link) =>
        link.action ? (
          <button
            type="button"
            className="transition-all duration-300 ease-in-out hover:scale-105 !text-white no-underline"
            key={link.name}
            onClick={link.action}
            style={{ background: "none" }}
          >
            {link.name}
          </button>
        ) : (
          <a
            className="transition-all duration-300 ease-in-out hover:scale-105 !text-white no-underline"
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        )
      )}
    </div>
  );
};

export default SocialLinks;
