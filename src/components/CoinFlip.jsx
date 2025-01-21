import React, { useState } from "react";
import "../styles/ProjectStyles/CoinFlip.css";

const CoinFlipGame = () => {
  const [coinFace, setCoinFace] = useState("COIN"); // The outcome of the coin flip
  const [outcome, setOutcome] = useState("| WON or LOST |"); // Message for who won
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
    <div className="HT-container">
      <div className="HT-game-wrapper">
        <h1 className="HT-title">Flip a Coin!</h1>
        <p className="HT-instruction">What's your guess?</p>
        <div className="HT-button-container">
          <button className="HT-game-button" 
            onClick={() => 
                      {
                        setOutcome("| WON or LOST |")
                        finalResult("HEADS")
                      }
                    }>
            Heads
          </button>
          <button className="HT-game-button" 
            onClick={() =>
                      {
                        setOutcome("| WON or LOST |")
                        finalResult("TAILS")
                      }
                    }>
            Tails
          </button>
        </div>
        <div className={`coin ${animateCoin ? "coin-animation" : ""}`}> {coinFace}</div>

        <div className="HT-result">
          {/* {outcome && (
            <>
              <p>{outcome.split("\n")[0]}</p>
              <p>{outcome.split("\n")[1]}</p>
            </>
          )} remeber this a code to separate and display elements inside a single P borken by \n to treat as an array*/}
          <p className="HT-outcome">{outcome}</p>
        </div>
      </div>

    </div>
  );
};

export default CoinFlipGame;
