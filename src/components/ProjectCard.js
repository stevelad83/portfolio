import React from "react";
import "./project-card.css";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={`../images/${project.image}`} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link}>Link to project</a>
    </div>
  );
}
