import React from "react";
import "./Projects.css";
import leagueimg from "./Home-page.jpg";
import waterlooimg from "./waterloo.jpg";

function Projects() {
  //Work lines up with the project tab
  return (
    <div className="background">
      <div className="project-bar-container">
        <div className="project-bar" data-aos="fade-in" data-aos-duration="600">
          <h2>Portfolio</h2>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
        <div className="project-grid">
          <div className="grid-item">
            <img src={waterlooimg} alt="" />
            <div className="grid-item-text">
              <h2>Developing features for Open Source Libraries</h2>
              <em>University of Waterloo</em>
            </div>
          </div>

          <a href="https://github.com/eevanwong/League-Bot" target="_blank">
            <div className="grid-item">
              <img src={leagueimg} alt="" />
              <div className="grid-item-text">
                <h2>Learning webscraping w/ League Discord Bot</h2>

                <em>Side Project</em>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
