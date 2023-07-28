// import React from "react";
// import "./project-card.css";

// export default function ProjectCard({ project }) {
//   return (
//     <div className="project-card">
//       <img src={project.image} alt={project.title} />
//       <h3>{project.title}</h3>
//       <p>{project.description}</p>
//       <a href={project.link}>Link to project</a>
//     </div>
//   );
// }

import React from "react";
import "./project-card.css";
import "../data/projectData.js";

const ProjectCard = ({ project }) => {
  const { title, description, link } = project;

  return (
    <div className="project-card">
      <img src={require(`../images/photo.jpeg`)} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
