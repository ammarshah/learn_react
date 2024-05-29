interface CartItem {
  id: number;
  title: string;
  quantity: number;
}

interface Props {
  items: CartItem[];
  onIncrement: (itemId: number) => void;
}

function Cart({ items, onIncrement }: Props) {
  return (
    <>
      <h1>Cart</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title} (Quantity: {item.quantity})
            <button onClick={() => onIncrement(item.id)}>+1</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cart;
