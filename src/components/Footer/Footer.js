import React from "react";
import "./Footer.css";
import mail from "./email.png";
import github from "./github.png";
import linkedin from "./linkedin1.png";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="icons-container">
          <div className="icons">
            <ul>
              <li>
                <a
                  href="mailto:e92wong@uwaterloo.ca"
                  target="_blank"
                  alt="email"
                >
                  <img src={mail} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/eevanwong"
                  target="_blank"
                  alt="github"
                >
                  <img src={github} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/iamevanwong/"
                  target="_blank"
                  alt="linkedin"
                >
                  <img src={linkedin} />
                </a>
              </li>
            </ul>
          </div>
          <h1>&lt;/EV&gt;</h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
/*
<img
                alt="File:TK email icon.svg" //using absolute img b/c local dont work for some reason
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/TK_email_icon.svg/100px-TK_email_icon.svg.png"
                decoding="async"
                srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/TK_email_icon.svg/150px-TK_email_icon.svg.png 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/TK_email_icon.svg/200px-TK_email_icon.svg.png 2x"
              />

                            <img
                itemprop="url"
                src="https://www.iconninja.com/files/236/359/742/github-development-code-coding-program-programming-icon.png"
                alt="github, development, code, coding, program, programming icon"
                id="main_icon"
              />
              <img
                src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_gray-512.png"
                alt="Gray, circle, linkedin icon - Free download on Iconfinder"
                class="d-block mx-auto"
              />
              */
