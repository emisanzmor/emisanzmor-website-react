import React from "react";

const SocialLinks = () => {
  const socialLinks = [
    { name: "LINKEDIN", url: "https://www.linkedin.com/in/emisanzmor/" },
    { name: "GITHUB", url: "https://github.com/emisanzmor/" },
    { name: "INSTAGRAM", url: "https://www.instagram.com/emisanzmor/" },
    { name: "EMAIL", url: "mailto:emisn1501@gmail.com" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        marginTop: "1.5rem",
        letterSpacing: "0.5px",
        fontWeight: 500,
        gap: "2rem",
      }}
    >
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#141414",
            textDecoration: "none",
          }}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
