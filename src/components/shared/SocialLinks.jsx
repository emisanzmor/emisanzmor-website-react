import React from "react";

const SocialLinks = () => {
  const socialLinks = [
    { name: "LINKEDIN", url: "https://www.linkedin.com/in/emisanzmor/" },
    { name: "GITHUB", url: "https://github.com/emisanzmor/" },
    { name: "INSTAGRAM", url: "https://www.instagram.com/emisanzmor/" },
    { name: "EMAIL", url: "mailto:emisn1501@gmail.com" },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-start mt-[1.5rem] tracking-wide font-medium  gap-4 sm:gap-8">
      {socialLinks.map((link) => (
        <a
          className="transition-all duration-300 ease-in-out hover:scale-105 !text-white no-underline"
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
