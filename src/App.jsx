import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Certifications from "./components/Certifications.jsx";
import Education from "./components/Education.jsx";

import DigitalClock from "./components/projectComponents/DigitalClock.jsx";
import RockPaperScissors from "./components/projectComponents/RockPaperScissors.jsx";
import TodoList from "./components/projectComponents/TodoList.jsx";
import StopWatch from "./components/projectComponents/Stop-Watch.jsx";
import CoinFlipGame from "./components/projectComponents/CoinFlip.jsx";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Education />
              <Certifications />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/digital-clock" element={<DigitalClock />} />
        <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/stopwatch" element={<StopWatch />} />
        <Route path="/coinflip" element={<CoinFlipGame />} />
      </Routes>
    </div>
  );
}

export default App;