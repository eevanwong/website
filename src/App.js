import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Projects from "./components/Projects/Projects.js";
import Footer from "./components/Footer/Footer.js";
function App() {
  return (
    <Router title="Evan Wong">
      <Navbar />
      <Home />

      <About />
      <Projects />
      <Footer />
    </Router>
  );
}

export default App;
