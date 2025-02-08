import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Certifications from "./components/Certifications";
import Education from "./components/Education";

import DigitalClock from "./components/projectComponents/DigitalClock";
import RockPaperScissors from "./components/projectComponents/RockPaperScissors";
import TodoList from "./components/projectComponents/TodoList";
import StopWatch from "./components/projectComponents/Stop-Watch";
import CoinFlipGame from "./components/projectComponents/CoinFlip";

function DebugRouter() {
  const location = useLocation();
  useEffect(() => {
    console.log("Navigated to:", location.pathname);
  }, [location]);
  return null;
}

function App() {
  return (
    <Router>
      <DebugRouter />
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <section id="about"><About /></section>
            <section id="education"><Education /></section>
            <section id="certifications"><Certifications /></section>
            <section id="projects"><Projects /></section>
            <section id="contact"><Contact /></section>
          </>
        } />
        <Route path="/digital-clock" element={<DigitalClock />} />
        <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/stopwatch" element={<StopWatch />} />
        <Route path="/coinflip" element={<CoinFlipGame />} />
      </Routes>
    </Router>
  );
}

export default App;
