import React, { useState } from "react";
import "../../styles/ProjectPreviewStyles/CoinFlipPreview.css"

const CoinFlipPreview = () => {
  const [coinFace, setCoinFace] = useState("COIN"); // The outcome of the coin flip
  const [outcome, setOutcome] = useState("| WIN or LOOSE |"); // Message for who won
  const [animateCoin, setAnimateCoin] = useState(false); // To trigger coin animation

  const finalResult = (userGuess) => {
    const randomNumber = Math.random();
    const coinResult = randomNumber < 0.5 ? "HEADS" : "TAILS";

    // Opponent's move is the opposite of user's guess
    const opponentMove = userGuess === "HEADS" ? "TAILS" : "HEADS";

    // Determine the game outcome
    const gameOutcome =
      userGuess === coinResult
        ? `YOU WON! 🎉`
        : `YOU LOST! 😔`;

    
    // Trigger the coin flip animation
    setAnimateCoin(true);

    //change the coinface after flipping 2 secs
    setTimeout(()=>{
      setCoinFace(coinResult)
    },2000)

    // Reset the animation after 3 seconds (duration of animation)
    setTimeout(() => {
      setAnimateCoin(false);
      setOutcome(gameOutcome);
    }, 3000);
  };

  return (
    <div className="HTR-container">
      <div className="HTR-game-wrapper">
        <h1 className="HTR-title">Flip a Coin!</h1>
        <div className={`HTR-coin ${animateCoin ? "HTR-coin-animation" : ""}`}> {coinFace}</div>
        <span className="HTR-outcome">{outcome}</span>
        <span className="HTR-instruction">What's your guess?</span>
        <div className="HTR-button-container">
          <button className="HTR-game-button" 
            onClick={() => 
                      {
                        setOutcome("| WIN or LOOSE |")
                        finalResult("HEADS")
                      }
                    }>
            Heads
          </button>
          <button className="HTR-game-button" 
            onClick={() =>
                      {
                        setOutcome("| WIN or LOOSE |")
                        finalResult("TAILS")
                      }
                    }>
            Tails
          </button>
        </div>
        <div className="HTR-result">
          {/* {outcome && (
            <>
              <p>{outcome.split("\n")[0]}</p>
              <p>{outcome.split("\n")[1]}</p>
            </>
          )} remeber this a code to separate and display elements inside a single P borken by \n to treat as an array*/}
        </div>
      </div>

    </div>
  );
};

export default CoinFlipPreview;
