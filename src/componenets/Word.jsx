import clsx from "clsx";

export default function Word(props) {
  const letter = props.word.map((ch, index) => {
    const shouldReveal = props.status || props.guess.includes(ch);
    const letterClassName = clsx(
      props.status && !props.guess.includes(ch) && "missed-letter"
    );
    return <span key={index} className={letterClassName}>{shouldReveal ? ch.toUpperCase() : ""}</span>;
  });

  return <section className="word">{letter}</section>;
}
