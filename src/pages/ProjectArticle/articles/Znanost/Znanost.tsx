import React from "react";
import ArticleBanner from "../../../../components/ArticleBanner/ArticleBanner";
import { BreadcrumbProps } from "../../../../components/Breadcrumb/Breadcrumb";
import ProjectsListTab from "../../../../components/ProjectsListTab/ProjectsListTab";
import "../../projectArticle.scss";

const Znanost = () => {
  const breadcrumbProps: BreadcrumbProps = {
    items: [
      {
        key: "projekti",
        title: "Projekti",
        href: "/projects",
      },
      {
        key: "znanost",
        title: "Znanost",
      },
    ],
  };

  return (
    <div className="pz-project-article article-znanost">
      <ArticleBanner
        breadcrumbProps={breadcrumbProps}
        imageSrc={require("../../../../resources/articles/Znanost/banner-znanost.png")}
        title="Znanost"
        colorMode="light"
      />

      <div className="article-data-container">
        <div className="article-text">Enter your article data here</div>
        <ProjectsListTab activeProject="znanost" title="Ostali projekti" />
      </div>
    </div>
  );
};

export default Znanost;
