export default function Word(props) {
  const letter = props.word.map((ch, index) => <span key={index}>{ch.toUpperCase()}</span>);

  return <section className="word">{letter}</section>;
}