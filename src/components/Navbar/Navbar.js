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
          <drawertogglebutton />
          <div className="navbar-logo">&lt;EW&gt;</div>
          <div className="spacer"></div>
          <div className="navbar-items">
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href={pdf} target="_blank">
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
