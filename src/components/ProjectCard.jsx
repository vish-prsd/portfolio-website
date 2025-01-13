import React from "react";
import {Link} from "react-router-dom"
import "../styles/ProjectCard.css";

function ProjectCard({ title, description, demoLink, codeLink,Renders }) {
  return (
    <div className="projectCard">
      <div className="projectPreview">
       {Renders}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={demoLink} className="demo-link">View Demo</Link>
      <a href={codeLink} target="_blank" rel="noopener noreferrer">View Code</a>
    </div>
  );
}

export default ProjectCard;
