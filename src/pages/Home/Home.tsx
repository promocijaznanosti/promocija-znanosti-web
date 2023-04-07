import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Partners from "../../components/Partners/Partners";
import "./home.scss";
import { projectDescriptions } from "./project-descriptions";

const Home = () => {
  return (
    <div className="pz-home pz-page">
      <Banner />
      <Partners />
      <div className="pz-slide">
        <div className="pz-slide-inner projects-container light-grey-bg">
          <div className="pz-slide-title">Projekti</div>
          <div className="projects-description">
            Est duis dolore officia qui sunt cupidatat Lorem nisi et non. Nulla
            commodo amet excepteur incididunt cillum ullamco dolore laboris
            deserunt fugiat. Nostrud quis aliquip Lorem proident irure dolore
            Lorem pariatur. Ut non occaecat Lorem ullamco aute. Magna fugiat
            esse velit ea labore quis irure officia pariatur. Tempor non officia
            laboris anim laborum tempor minim occaecat. Sit id consectetur velit
            pariatur do aute. Esse sit pariatur ea culpa dolore amet est nulla
            sint anim. Aute do deserunt consectetur veniam do. Do tempor ex non
            laboris elit duis esse voluptate dolore nostrud aliqua deserunt
            exercitation nostrud. Eiusmod et dolore minim sit nulla irure
            pariatur minim enim elit. Excepteur sint ullamco aliqua et elit qui.
            Magna ut elit ipsum incididunt. Tempor do cupidatat aliqua mollit
            occaecat aliqua dolore. Cillum adipisicing commodo cillum laboris
            officia sint quis voluptate culpa dolor. Anim dolore exercitation
            ullamco officia pariatur ullamco irure aute enim ut. Proident cillum
            occaecat aliquip culpa duis enim et deserunt tempor excepteur et
            labore non.
          </div>
        </div>
      </div>
      <div className="pz-slide">
        <div className="pz-slide-inner project-descriptions-container dark-grey-bg">
          {projectDescriptions.map((project) => (
            <div className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-data">
                <div className="project-title">{project.title}</div>
                <div className="project-description">{project.description}</div>
                <Link to={`projects/${project.id}`} className="learn-more">
                  saznaj više
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
