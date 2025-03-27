import clsx from "clsx";
import { languages } from "../languages";
import { getFarewellText } from "../utils";

export default function Status(props) {
  const gameStatusClass = clsx("game-status", {
    won: props.gameWon,
    lost: props.gameLost,
    farewell: !props.status && props.lastGuess,
  });

  function renderGameStatus() {
    if (!props.status && props.lastGuess) {
      return (
        <p className="farewell-message">
          {getFarewellText(languages[props.wrong - 1].name)}
        </p>
      );
    }

    if (props.gameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      );
    }
    if (props.gameLost) {
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly</p>
        </>
      );
    }
    return null;
  }

  return <section className={gameStatusClass}>{renderGameStatus()}</section>;
}
