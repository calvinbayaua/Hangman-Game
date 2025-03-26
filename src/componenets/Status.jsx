import clsx from "clsx";

export default function Status(props) {
  const gameStatusClass = clsx("game-status", {
    won: props.gameWon,
    lost: props.gameLost,
  });

  return (
    <section className={gameStatusClass}>
      {props.status ? (
        props.gameWon ? (
          <>
            <h2>You win!</h2>
            <p>Well done! 🎉</p>
          </>
        ) : (
          <>
            <h2>Game over!</h2>
            <p>You lose! Better start learning Assembly</p>
          </>
        )
      ) : null}
    </section>
  );
}
