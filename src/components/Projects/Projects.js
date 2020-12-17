import React from "react";
import "./Projects.css";
import leagueimg from "./Home-page.jpg";
import waterlooimg from "./waterloo.jpg";

function Projects() {
  return (
    <>
      <div className="project-bar-container">
        <div className="project-bar">
          <h2>Work</h2>
        </div>
      </div>
      <div className="project">
        <div className="project-grid">
          <div className="grid-item">
            <img src={waterlooimg} alt="" />
            <h2>Developing features for Open Source Libraries</h2>
            <em>University of Waterloo</em>
          </div>
          <div className="grid-item">
            <a href="https://github.com/eevanwong/League-Bot" target="_blank">
              <img src={leagueimg} alt="" />
            </a>
            <h2>League Stats Discord Bot</h2>
            <h2>
              <em>Side Project</em>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
