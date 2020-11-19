import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Drawertogglebutton from "./components/Sidedrawer/Drawertogglebutton.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar></Navbar>

      <Switch>
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default App;
