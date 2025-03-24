import { useState } from "react";
import Header from "./componenets/Header";
import Status from "./componenets/Status";
import Chips from "./componenets/Chips";
import Word from "./componenets/Word";
import { languages } from "./languages";

function App() {
  const [currentWord, setCurrentWord] = useState("react");

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const langButtons = languages.map((lang) => {
    return (
      <Chips
        key={lang.name}
        name={lang.name}
        color={lang.color}
        backgroundColor={lang.backgroundColor}
      />
    );
  });

  const letterElements = currentWord.split("");

  const keyboard = alphabet
    .split("")
    .map((letter) => <button key={letter}>{letter.toUpperCase()}</button>);

  return (
    <main>
      <Header />
      <Status />
      <section className="language-chips">{langButtons}</section>
      <Word word={letterElements} />
      <section className="keyboard">{keyboard}</section>
      <button className="new-game">New Game</button>
    </main>
  );
}

export default App;
