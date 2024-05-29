interface Props {
  name: string;
  toppings: string[];
  onAdd: () => void;
}

function Pizza({ name, toppings, onAdd }: Props) {
  return (
    <>
      <div>Pizza Name: {name}</div>
      <ul>
        {toppings.map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
      <button onClick={onAdd}>Add topping</button>
    </>
  );
}

export default Pizza;
