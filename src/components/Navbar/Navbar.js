import React, { useState } from "react";
import "./Navbar.css";
import "../Sidedrawer/Drawertogglebutton.js";
import pdf from "./EVAN_W_RESUME.pdf";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Navbar() {
  // let navItems = document.querySelector(".navbar-items");
  // function handleClick(e) {
  //   console.log(navItems.style);
  //   navItems.style.opacity = "0.76";
  //   e.target.style.opacity = "1";
  // }

  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-logo">
          <Link to={"/"}>&lt;EV&gt;</Link>
        </div>
        <div className="spacer"></div>
        <div className="navbar-items">
          <ul>
            <li class="navbar-items-active">
              <Link to="/">Work</Link>
            </li>
            <li class="navbar-items-active">
              <Link to="/About">About</Link>
            </li>
            {/* <li>
              <div className="slash">\</div>
              <Link className="navbar-items-active" to={"/Projects"}>
                Portfolio
              </Link>
            </li> */}
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
