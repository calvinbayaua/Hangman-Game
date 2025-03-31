import { useState, useEffect } from "react";
import clsx from "clsx";
import Confetti from "react-confetti";
import Header from "./componenets/Header";
import Status from "./componenets/Status";
import Chips from "./componenets/Chips";
import Word from "./componenets/Word";
import { languages } from "./languages";
import { randomWord } from "./utils";

function App() {
  // INIT - State values
  const [currentWord, setCurrentWord] = useState(() => randomWord());
  const [guess, setGuess] = useState([]);

  // INIT - Derived values
  const guessesLeft = languages.length - 1;
  const wrongGuessCount = guess.filter(
    (ch) => !currentWord.includes(ch)
  ).length;
  const isGameWon = currentWord
    .split("")
    .every((letter) => guess.includes(letter));
  const isGameLost = wrongGuessCount >= guessesLeft;
  const isGameOver = isGameWon || isGameLost;
  const isLastGuessIncorrect =
    guess[guess.length - 1] && !currentWord.includes(guess[guess.length - 1]);

  // INIT - Static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const langChips = languages.map((lang, index) => {
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

  function newGame() {
    setCurrentWord(randomWord());
    setGuess([]);
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
        disabled={isGameOver}
        aria-disabled={guess.includes(letter)}
        aria-label={`letter ${letter}`}
        onClick={() => addGuess(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  return (
    <main>
      {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
      <Header />
      <Status
        gameWon={isGameWon}
        gameLost={isGameLost}
        status={isGameOver}
        wrong={wrongGuessCount}
        lastGuess={isLastGuessIncorrect}
      />
      <section className="language-chips">{langChips}</section>
      <Word word={letterElements} guess={guess} status={isGameLost} />{" "}
      <section className="sr-only" aria-live="polite" role="status">
        <p>
          {currentWord.includes(guess[guess.length - 1])
            ? `Correct! The letter ${guess[guess.length - 1]} is in the word.`
            : `Sorry, the letter ${
                guess[guess.length - 1]
              } is not in the word.`}{" "}
          You have {guessesLeft} attempts left.
        </p>
        <p>
          Current word:{" "}
          {currentWord
            .split("")
            .map((letter) => (guess.includes(letter) ? letter + "." : "blank."))
            .join(" ")}
        </p>
      </section>
      <section className="keyboard">{keyboard}</section>
      {isGameOver ? (
        <button className="new-game" onClick={newGame}>
          New Game
        </button>
      ) : null}
    </main>
  );
}

export default App;
