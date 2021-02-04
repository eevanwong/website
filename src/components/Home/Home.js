import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-wrapper">
        <div data-aos="fade-in" data-aos-duration="600">
          <h2>
            Hey, I'm <span>Evan.</span>
          </h2>
          <h3> Developing @uWaterloo</h3>

          <em
            className="txt-type"
            data-wait="2000"
            data-words='["Torontonian","Systems Design Engineer","Competitive Swimmer", "Miami Heat Fan"]'
          >
            {" "}
          </em>

          <br></br>
        </div>
        <div data-aos="fade-in" data-aos-duration="600" data-aos-delay="400">
          <h4>Looking for Development Opportunities for Winter 2021</h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
