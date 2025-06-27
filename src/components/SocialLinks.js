import React from "react";

const SocialLinks = () => {
  const socialLinks = [
    { name: "LINKEDIN", url: "https://www.linkedin.com/in/emisanzmor/" },
    { name: "GITHUB", url: "https://github.com/emisanzmor/" },
    { name: "INSTAGRAM", url: "https://www.instagram.com/emisanzmor/" },
  ];

  return (
    <div
      style={{
        alignItems: "flex-start",
        marginTop: "1.5rem",
        letterSpacing: "0.5px",
        fontWeight: 500,
      }}
    >
      <h3>Hola desde SocialLinks</h3>
    </div>
  );
};

export default SocialLinks;
