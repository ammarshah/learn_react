import { useState } from "react";
import styles from "./ListGroup.module.css";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>No items found</p>}

      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {items.map((item, index) => (
          <li
            className={
              selectedItemIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedItemIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
