import React from "react";
import {Link} from "react-router-dom"
import "../styles/ProjectCard.css";

function ProjectCard({ title, description, demoLink, codeLink }) {
  return (
    <div className="projectCard">
      <h3>{title}</h3>
      <p>{description}</p>
      {/* <a href={demoLink} target="_blank" rel="noopener noreferrer">View Demo</a> */}

      <Link to={demoLink} className="demo-link">View Demo</Link>
      <a href={codeLink} target="_blank" rel="noopener noreferrer">View Code</a>
    </div>
  );
}

export default ProjectCard;
