import React from 'react';
import './AddingStyle/App.css';
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from "./Navigation";
import Home from "./Home.js";
// import About from "./Components/About";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Footer from "./Footer";
import ProjectError from "./Components/Project-Error.js";

function App() {
  return (
    <Router>
        <Navigation/>
        <Routes>
            <Route path="/" element={Home} />
            {/* <Route path="/About" element={About}/> */}
            <Route path="/Education" element={Education} />
            <Route path="/Experience" element={Experience}/>
            <Route path="/Projects" element={Projects}/>
            <Route path="/ProjectError" element={ProjectError}/>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
