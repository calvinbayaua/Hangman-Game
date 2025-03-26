import { useState, useEffect } from "react";
import clsx from "clsx";
import Header from "./componenets/Header";
import Status from "./componenets/Status";
import Chips from "./componenets/Chips";
import Word from "./componenets/Word";
import { languages } from "./languages";

function App() {
  // INIT - State values
  const [currentWord, setCurrentWord] = useState("react");
  const [guess, setGuess] = useState([]);

  // INIT - Derived values
  const wrongGuessCount = guess.filter(
    (ch) => !currentWord.includes(ch)
  ).length;
  const isGameWon = currentWord
    .split("")
    .every((letter) => guess.includes(letter));
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;

  // INIT - Static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const langButtons = languages.map((lang, index) => {
    return (
      <Chips
        key={lang.name}
        name={lang.name}
        color={lang.color}
        backgroundColor={lang.backgroundColor}
        index={index}
        count={wrongGuessCount}
      />
    );
  });

  const letterElements = currentWord.split("");

  function addGuess(letter) {
    setGuess((prev) => (guess.includes(letter) ? prev : [...prev, letter]));
  }

  const keyboard = alphabet.split("").map((letter) => {
    const isGuessed = guess.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        key={letter}
        className={className}
        onClick={() => addGuess(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  return (
    <main>
      <Header />
      <Status gameWon={isGameWon} gameLost={isGameLost} status={isGameOver} />
      <section className="language-chips">{langButtons}</section>
      <Word word={letterElements} guess={guess} />
      <section className="keyboard">{keyboard}</section>
      {isGameOver ? <button className="new-game">New Game</button> : null}
    </main>
  );
}

export default App;
