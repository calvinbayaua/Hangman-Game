export default function Chips(props) {

  return (
    <>
      <span
        className={`chip ${props.index < props.count ? "lost" : ""}`}
        style={{ backgroundColor: props.backgroundColor, color: props.color }}
      >
        {props.name}
      </span>
    </>
  );
}
