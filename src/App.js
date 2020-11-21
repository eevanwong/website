import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Drawertogglebutton from "./components/Sidedrawer/Drawertogglebutton.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home.js";
import About from "./components/pages/About/About.js";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" />
      </Switch>
      <Home />

      <About />
    </Router>
  );
}

export default App;
