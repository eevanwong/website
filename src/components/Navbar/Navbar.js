import React, { useState } from "react";
import "./Navbar.css";
import "../Sidedrawer/Drawertogglebutton.js";
import pdf from "./EVAN_W_RESUME.pdf";
function Navbar() {
  //const [click, setClick] = useState(false); //hooks - need better understanding
  //const handleClick = () => setClick(!click);

  return (
    //fragments

    <>
      <div data-aos="fade-down" data-aos-duration="600">
        <div className="navbar-wrapper">
          <div className="navbar">
            <div className="navbar-logo">
              <a href="#/">&lt;EV&gt;</a>
            </div>
            <div className="spacer"></div>
            <div className="navbar-items">
              <ul>
                <li>
                  <a href="#/About" id="n/a">
                    About Me
                  </a>
                </li>
                <li>
                  <div className="slash">\</div>
                  <a href={"#/Projects"} id="n/a">
                    Portfolio
                  </a>
                </li>
                <li>
                  <div className="slash">\</div>
                  <a href={pdf} target="_blank" id="n/a">
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
/*

              <li>
                <a href="" className="not-available">
                  About
                </a>
              </li>
              <li>
                <a href="" className="not-available">
                  Projects
                </a>
              </li>
*/
