import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="home">
        <div className="home-wrapper">
          <h2>EVAN WONG</h2>
          <h3>Systems Design Engineer from Toronto, ON</h3>
          <br></br>

          <h3>Looking for Coop Opportunities for Winter 2021 Term</h3>

          <div class="icons">
            <a href="mailto: e92wong@uwaterloo.ca" target="_blank">
              <img
                alt="File:TK email icon.svg" //using absolute img b/c local dont work for some reason
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/TK_email_icon.svg/100px-TK_email_icon.svg.png"
                decoding="async"
                srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/TK_email_icon.svg/150px-TK_email_icon.svg.png 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/TK_email_icon.svg/200px-TK_email_icon.svg.png 2x"
              />
            </a>
            <a href="https://github.com/eevanwong" target="_blank">
              <img
                itemprop="url"
                src="https://www.iconninja.com/files/236/359/742/github-development-code-coding-program-programming-icon.png"
                alt="github, development, code, coding, program, programming icon"
                id="main_icon"
              />
            </a>
            <a href="https://www.linkedin.com/in/iamevanwong/" target="_blank">
              <img
                src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_gray-512.png"
                alt="Gray, circle, linkedin icon - Free download on Iconfinder"
                class="d-block mx-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
