export default function Chips(props) {
  return (
    <>
      <span
        className="chip"
        style={{ backgroundColor: props.backgroundColor, color: props.color }}
      >
        {props.name}
      </span>
    </>
  );
}
