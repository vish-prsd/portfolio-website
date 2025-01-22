import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";
import DigitalClockPreview from "../projectPreview/components/DigitalClockPreview";
import RockPaperScissorsPreview from "../projectPreview/components/RockPaperScissorsPreview.jsx"
import TodoListPreview from "../projectPreview/components/TodoListPreview.jsx";
import StopWatchPreview from "../projectPreview/components/Stop-Watch-Preview.jsx";
import CoinFlipPreview from "../projectPreview/components/CoinFlipPreview.jsx"
import ColorPicker from "../projectPreview/components/ColorPicker.jsx"

function Projects() {
  return (
    <section id="projects" className="projects sections">
      <h2>Projects</h2>
      <div className="projects__grid">
        <ProjectCard 
          Renders={<DigitalClockPreview/>}
          title="Digital Clock" 
          description="A simple digital clock built with React.js" 
          demoLink="/digital-clock" 
          codeLink="https://github.com/vish-prsd/Digital-Clock" 
        />
        <ProjectCard 
          Renders={<RockPaperScissorsPreview/>}
          title="Rock-Paper-Scissors" 
          description="A game of Rock, Paper, Scissors with basic logic" 
          demoLink="/rock-paper-scissors" 
          codeLink="https://github.com/vish-prsd/Rock-Paper-Scissors-Game" 
        />
        <ProjectCard 
          Renders={<TodoListPreview/>}
          title="Todo-List" 
          description="A Todo-List App to keep track of works" 
          demoLink="/todo-list" 
          codeLink="https://github.com/vish-prsd/To-Do-List" 
        />
        <ProjectCard 
          Renders={<StopWatchPreview/>}
          title="Stopwatch" 
          description="A stopwatch app with start/stop functionality" 
          demoLink="/stopwatch" 
          codeLink="https://github.com/vish-prsd/Stop-Watch" 
        />
        <ProjectCard 
          Renders={<CoinFlipPreview/>}
          title="Coin-Flip-Game" 
          description="A game of Coin-Flip with basic logic" 
          demoLink="/coinflip" 
          codeLink="https://github.com/vish-prsd/portfolio-website/blob/main/src/components/CoinFlip.jsx" 
        />
        <ProjectCard 
          Renders={<ColorPicker/>}
          title="Calculator" 
          description="A simple calculator performing basic arithmetic tasks" 
          demoLink="#" 
          codeLink="https://github.com/vish-prsd/portfolio-website/blob/main/src/projectPreview/components/ColorPicker.jsx" 
        />
      </div>
    </section>
  );
}

export default Projects;
