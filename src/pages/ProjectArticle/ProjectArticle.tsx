import React from "react";
import { useParams } from "react-router-dom";
import { articles } from "./articles/articles";

const ProjectArticle = () => {
  const { articleId } = useParams();

  const projectPage: any = articles[articleId as string].element;

  return <div>{projectPage}</div>;
};

export default ProjectArticle;
