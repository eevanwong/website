import React from "react";
import "./Projects.css";
import leagueimg from "./Home-page.jpg";
import waterlooimg from "./waterloo.jpg";

function Projects() {
  //Work lines up with the project tab
  return (
    <>
      <div className="background">
        <div data-aos="fade-up" data-aos-duration="600">
          <div className="project">
            <div className="project-bar-container">
              <div className="project-bar">
                <h2>Portfolio</h2>
              </div>
            </div>
            <div className="project-grid">
              <div data-aos="fade-up" data-aos-duration="600">
                <div className="grid-item">
                  <img src={waterlooimg} alt="" />
                  <h2>Developing features for Open Source Libraries</h2>
                  <em>University of Waterloo</em>
                </div>
              </div>
              <div data-aos="fade-up">
                <div className="grid-item">
                  <a
                    href="https://github.com/eevanwong/League-Bot"
                    target="_blank"
                  >
                    <img src={leagueimg} alt="" />
                  </a>
                  <h2>League Stats Discord Bot</h2>
                  <h2>
                    <em>Side Project</em>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
