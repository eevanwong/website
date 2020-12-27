import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Projects from "./components/Projects/Projects.js";
import Footer from "./components/Footer/Footer.js";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
      <Route
        exact
        path={process.env.PUBLIC_URL + "/Projects"}
        component={Projects}
      />
      <Route exact path={process.env.PUBLIC_URL + "/About"} component={About} />
      <Footer />
    </div>
  );
}

export default App;
