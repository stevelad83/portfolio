import React from "react";
import ProjectCard from "../Components/ProjectCard.js";
import projects from "../data/projectData.js";
import "./portfolio.css";

export default function Portfolio() {
  return (
    <div>
      <h2>Projects</h2>
      <p>Here are some projects I have worked on</p>
      <div className="project-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
