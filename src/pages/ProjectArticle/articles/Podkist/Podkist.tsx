import React from "react";
import ArticleBanner from "../../../../components/ArticleBanner/ArticleBanner";
import { BreadcrumbProps } from "../../../../components/Breadcrumb/Breadcrumb";
import ProjectsListTab from "../../../../components/ProjectsListTab/ProjectsListTab";
import "../../projectArticle.scss";

const Podkist = () => {
  const breadcrumbProps: BreadcrumbProps = {
    items: [
      {
        key: "projekti",
        title: "Projekti",
        href: "/projects",
      },
      {
        key: "podkist",
        title: "Podkist",
      },
    ],
  };

  return (
    <div className="pz-project-article article-podkist">
      <ArticleBanner
        breadcrumbProps={breadcrumbProps}
        imageSrc={require("../../../../resources/articles/Podkist/banner-podkist.png")}
        title="Podkist"
        colorMode="dark"
      />

      <div className="article-data-container">
        <div className="article-text">Enter your article data here</div>
        <ProjectsListTab activeProject="podkist" title="Ostali projekti" />
      </div>
    </div>
  );
};

export default Podkist;
