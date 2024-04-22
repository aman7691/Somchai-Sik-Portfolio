import React from 'react';
import './App.css';
import About from './Screens/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from './Screens/AboutMe';
import Project from './Screens/Project';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
