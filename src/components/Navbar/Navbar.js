import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import "../Sidedrawer/Drawertogglebutton.js";
import pdf from "./EVAN_W_RESUME.pdf";
import drawertogglebutton from "../Sidedrawer/Drawertogglebutton";
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
              <a href="/React-Website/">&lt;EV&gt;</a>
            </div>
            <div className="spacer"></div>
            <div className="navbar-items">
              <ul>
                <li>
                  <a href="/React-Website/About" id="n/a">
                    About Me
                  </a>
                </li>
                <li>
                  <div className="slash">\</div>
                  <a href="/React-Website/Projects" id="n/a">
                    Projects
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
