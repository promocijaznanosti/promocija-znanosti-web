import React from "react";
import "./articleBanner.scss";
import Breadcrumb, { BreadcrumbProps } from "../Breadcrumb/Breadcrumb";

export type ArticleBannerProps = {
  imageSrc?: string;
  title: string;
  breadcrumbProps: BreadcrumbProps;
  colorMode?: "dark" | "light";
};

const ArticleBanner = ({
  imageSrc,
  title,
  breadcrumbProps,
  colorMode,
}: ArticleBannerProps) => {
  return (
    <div className={`article-banner ${colorMode || "light"}-mode`}>
      <img src={imageSrc} alt={`${title} banner`} />
      <Breadcrumb {...breadcrumbProps} />
      <span className="border-accent">&nbsp;</span>
      <div className="article-title">{title}</div>
    </div>
  );
};

export default ArticleBanner;
