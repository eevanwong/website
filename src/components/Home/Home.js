import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <div data-aos="fade-up" data-aos-duration="600">
          <div className="home-wrapper">
            <h2>
              Hey, I'm <span>Evan</span>
            </h2>
            <span
              className="txt-type"
              data-wait="2000"
              data-words='["Torontonian","Systems Design Engineer","Competitive Swimmer", "Miami Heat Fan"]'
            >
              {" "}
            </span>
            <br></br>

            <h3>
              Currently developing features for Open Source Libraries at the
              University of Waterloo
            </h3>
            <br></br>
            <br></br>

            <h3>Looking for Development Opportunities for Winter 2021</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

/*
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    console.log("k");
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10); //This is determining if the wait is a number
    this.type(); //main method that actually types
    this.isDeleting = false; //Deleting text
  }

  type() {
    const current = this.wordIndex % this.words.length;

    //Get Full text of current word
    const fulltxt = this.words[current];

    //Check if deleting
    if (this.isDeleting) {
      //remove char
      this.txt = fulltxt.substring(0, this.txt.length - 1);
    } else {
      //Add char
      this.txt = fulltxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class = "txt">${this.txt}</span>`; //` for templates

    //Initial Type speed
    let typespeed = 100;

    if (this.isDeleting) {
      typespeed /= 2;
    }

    //if word is complete
    if (!this.isDeleting && this.txt === fulltxt) {
      //make pause at end
      typespeed = this.wait;

      //set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;

      //move to next word
      this.wordIndex++;

      // Pause before start typing
      typespeed = 200;
    }
    setTimeout(() => this.type(), typespeed);
  }
}

//Init On DOM Load
//window.onload = init();
//Inits app
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words")); //need to parse to use in javascript or else list will be seen as a string
  const wait = txtElement.getAttribute("data-wait");

  new TypeWriter(txtElement, words, wait);
}
*/
