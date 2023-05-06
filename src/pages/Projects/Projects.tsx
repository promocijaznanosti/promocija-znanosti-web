import React from "react";
import { Link } from "react-router-dom";
import Partners from "../../components/Partners/Partners";
import { otherProjectDescriptions } from "../../resources/project-info/other-project-descriptions";
import { projectDescriptions } from "../../resources/project-info/project-descriptions";
import "./projects.scss";

const Projects = () => {
  return (
    <div className="pz-projects pz-page">
      {projectDescriptions.map((project) => (
        <div className={`main-project ${project.colorMode || "light"}-mode`}>
          <div className="image">
            <img src={project.projectsPageImage} alt={project.title} />
          </div>
          <div className="data">
            <div className="title">{project.title}</div>
            <div className="description">{project.description}</div>
            <Link to={`projects/${project.id}`} className="learn-more">
              saznaj više
            </Link>
          </div>
        </div>
      ))}
      <Partners />

      <div className="other-projects">
        <div className="pz-slide-title">Svi projekti</div>
        <div className="projects-container">
          {otherProjectDescriptions.map((project) => (
            <div className="other-project">
              <div className="title">{project.title}</div>
              <div className="description">{project.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
