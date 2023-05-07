import React from "react";
import "./breadcrumb.scss";
import { Link } from "react-router-dom";

export type BreadcrumbProps = {
  items: {
    key: string;
    title: string | React.ReactNode;
    href?: string;
  }[];
};

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <div className="breadcrumb">
      {items.map((item, idx) => (
        <span
          key={item.key}
          className={`breadcrumb-item ${item.href === undefined ? "" : "link"}`}
        >
          {item.href === undefined ? (
            <>{item.title}</>
          ) : (
            <Link to={`${item.href}`}>{item.title}</Link>
          )}
          <span className="breadcrumb-separator">
            {idx !== items.length - 1 && " / "}
          </span>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
