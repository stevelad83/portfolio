import React from "react";
import "./project-card.css";
import "../data/projectData.js";

const ProjectCard = ({ project }) => {
  const { title, description, image, link } = project;

  return (
    <a
      className="project-card"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
};

export default ProjectCard;
