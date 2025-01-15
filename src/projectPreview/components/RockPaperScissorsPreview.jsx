import React, { useState, useEffect } from "react";
import "../../styles/ProjectPreviewStyles/RockPaperScissorsPreview.css";

const RockPaperScissorsPreview = () => {
  const [playerMove, setPlayerMove] = useState("");
  const [computerMove, setComputerMove] = useState("");
  const [result, setResult] = useState("Game Result");
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem("preview-score");
    return savedScore ? JSON.parse(savedScore) : { wins: 0, losses: 0, ties: 0 };
  });

  useEffect(() => {
    localStorage.setItem("preview-score", JSON.stringify(score));
  }, [score]);

  const pickComputerMove = () => {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) return "rock";
    if (randomNumber < 2 / 3) return "paper";
    return "scissors";
  };

  const handlePlayerMove = (move) => {
    const computerChoice = pickComputerMove();
    setPlayerMove(move);
    setComputerMove(computerChoice);

    let gameResult = "";
    if (
      (move === "rock" && computerChoice === "scissors") ||
      (move === "paper" && computerChoice === "rock") ||
      (move === "scissors" && computerChoice === "paper")
    ) {
      gameResult = "You win";
      setScore((prev) => ({ ...prev, wins: prev.wins + 1 }));
    } else if (move === computerChoice) {
      gameResult = "It's a tie";
      setScore((prev) => ({ ...prev, ties: prev.ties + 1 }));
    } else {
      gameResult = "You lose";
      setScore((prev) => ({ ...prev, losses: prev.losses + 1 }));
    }

    setResult(gameResult);
  };

  const resetScore = () => {
    setScore({ wins: 0, losses: 0, ties: 0 });
    setResult("Game Result");
    setPlayerMove("");
    setComputerMove("");
  };

  return (
    <div className="main-div-preview">
      <h1 className="preview-title">Rock-Paper-Scissors Game!</h1>
      <p className="preview-instruction">Pick your move</p>
      <div>
        <button
          onClick={() => handlePlayerMove("rock")}
          className="preview-move-button"
        >
          <img
            className="preview-move-icon"
            src="./rock-emoji.png"
            alt="Rock"
          />
        </button>
        <button
          onClick={() => handlePlayerMove("paper")}
          className="preview-move-button"
        >
          <img
            className="preview-move-icon"
            src="./paper-emoji.png"
            alt="Paper"
          />
        </button>
        <button
          onClick={() => handlePlayerMove("scissors")}
          className="preview-move-button"
        >
          <img
            className="preview-move-icon"
            src="./scissors-emoji.png"
            alt="Scissors"
          />
        </button>
      </div>
      <div className="preview-separator"></div>
      <p className="preview-result">{result}</p>
      <p className="preview-move">
        PLAYER01{" "}
        <img
          className="preview-move-icon"
          src={`./${playerMove}-emoji.png`}
          alt=""
        />{" "}&nbsp; &nbsp;
        <img
          className="preview-move-icon"
          src={`./${computerMove}-emoji.png`}
          alt=""
        />{" "}
        COMPUTER
      </p>
      <p className="preview-score">
        Wins: {score.wins} - Losses: {score.losses} - Ties: {score.ties}
      </p>
      <button onClick={resetScore} className="preview-reset-score-button">
        Reset Score
      </button>
    </div>
  );
};

export default RockPaperScissorsPreview;
