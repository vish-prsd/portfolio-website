import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Certifications from "./components/Certifications.jsx";
import Education from "./components/Education.jsx";

import DigitalClock from "./components/projectComponents/DigitalClock.jsx";
import RockPaperScissors from "./components/projectComponents/RockPaperScissors.jsx"
import TodoList from "./components/projectComponents/TodoList.jsx";

function App() {
  return (
    <Router basename="portfolio-website">
      <div className="app">
        <Header />  
        <Routes>
          <Route path = "/" element={
            <>
            <About />
            <Education />
            <Certifications />
            <Projects />
            <Contact />
            </>
          }/>
          <Route path="/digital-clock" element={<DigitalClock />} />
          <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
          <Route path="/todo-list" element={<TodoList/>} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
