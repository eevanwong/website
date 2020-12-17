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
      <div className="navbar-wrapper">
        <div className="navbar">
          <div className="navbar-logo">
            <Link to="/React-Website/">
              <a>&lt;EW&gt;</a>
            </Link>
          </div>
          <div className="spacer"></div>
          <div className="navbar-items">
            <ul>
              <li>
                <Link to="/React-Website/About">
                  <a href={pdf} target="_blank" id="n/a">
                    About Me
                  </a>
                </Link>
              </li>
              <li>
                <div class="slash">\</div>
                <Link to="/React-Website/Projects">
                  <a href={pdf} target="_blank" id="n/a">
                    Projects
                  </a>
                </Link>
              </li>
              <li>
                <div class="slash">\</div>
                <a href={pdf} target="_blank" id="n/a">
                  Resume
                </a>
              </li>
            </ul>
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
