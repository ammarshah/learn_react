interface Props {
  name: string;
  onChange: () => void;
}

function Game({ name, onChange }: Props) {
  return (
    <>
      <div>{name}</div>
      <button onClick={onChange}>Change player</button>
    </>
  );
}

export default Game;
