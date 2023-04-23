import React from "react";
import { useParams } from "react-router-dom";

const ProjectArticle = () => {
  const { articleId } = useParams();

  // const projectData = articles[params.articleId];

  return <div>{articleId}</div>;
};

export default ProjectArticle;
