import React from "react";
import { Link } from "react-router-dom";
import { articles } from "../../pages/ProjectArticle/articles/articles";
import "./projectsListTab.scss";

export type ProjectListTabProps = {
  title: string;
  activeProject?: string;
};

const ProjectsListTab = ({ title, activeProject }: ProjectListTabProps) => {
  const articleIds = Object.keys(articles);

  return (
    <div className="projects-list-tab">
      <div className="projects-list-title">
        <div>{title}</div>
      </div>
      <ul className="projects-list">
        {articleIds
          .filter((id) => id !== activeProject)
          .map((id) => (
            <li className="project-link">
              <Link to={`/projects/${id}`} key={id}>
                {articles[id].title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProjectsListTab;
