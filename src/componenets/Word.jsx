export default function Word(props) {
  const letter = props.word.map((ch, index) => (
    <span key={index}>{props.guess.includes(ch) ? ch.toUpperCase() : ""}</span>
  ));

  return <section className="word">{letter}</section>;
}
