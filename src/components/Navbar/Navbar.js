import React, { useState } from "react";
import "./Navbar.css";
import "../Sidedrawer/Drawertogglebutton.js";
import pdf from "./EVAN_W_RESUME.pdf";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
function Navbar() {
  //const [click, setClick] = useState(false); //hooks - need better understanding
  //const handleClick = () => setClick(!click);

  return (
    //fragments

    <>
      <div className="navbar-wrapper">
        <div className="navbar">
          <div className="navbar-logo">
            <Link to={"/"}>&lt;EV&gt;</Link>
          </div>
          <div className="spacer"></div>
          <div className="navbar-items">
            <ul>
              <li>
                <Link to="/About" id="about">
                  About
                </Link>
              </li>
              <li>
                {/* <div className="slash">\</div> */}
                <Link to={"/Projects"} id="projects">
                  Portfolio
                </Link>
              </li>
              <li>
                {/* <div className="slash">\</div> */}
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
