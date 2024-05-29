import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import LikeButton from "./components/LikeButton";
import Game from "./components/Game";
import Pizza from "./components/Pizza";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const [liked, setLiked] = useState(false);
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushrooms"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleChange = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };

  const handleAdd = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };

  const handleIncrement = (itemId: number) => {
    const updatedItems = cart.items.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart({ ...cart, items: updatedItems });
  };

  return (
    <div className="m-5">
      <h1>Alert</h1>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Now close me!</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Show Alert</Button>
      <hr />
      <h1>Like Button</h1>
      <LikeButton
        onClick={() => {
          setLiked(!liked);
          console.log("clicked");
        }}
        liked={liked}
      />
      <hr />
      <h1>Game</h1>
      <Game name={game.player.name} onChange={handleChange} />
      <hr />
      <h1>Pizza</h1>
      <Pizza name={pizza.name} toppings={pizza.toppings} onAdd={handleAdd} />
      <hr />
      <Cart items={cart.items} onIncrement={handleIncrement} />
      <hr />
      <h1>Expandable Text</h1>
      <ExpandableText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a congue
        metus. Quisque non diam mi. Ut magna nisi, rhoncus id efficitur a,
        gravida tincidunt dui. Maecenas tempor, sapien sed sollicitudin posuere,
        felis nisl eleifend arcu, et fringilla eros massa id dui. Suspendisse
        volutpat metus in finibus luctus. Quisque quis diam at nisi convallis
        mattis efficitur non nulla. Cras in ante ut lectus pharetra aliquet
        sollicitudin sit amet lacus. Aliquam erat volutpat. Quisque cursus, eros
        fringilla pharetra sagittis, lacus magna posuere lorem, eu consequat
        lacus ligula vitae nibh. Maecenas tincidunt eleifend sodales. Morbi in
        rhoncus mi. Praesent vulputate orci justo, ac pulvinar magna malesuada
        quis. Suspendisse non ipsum massa. Morbi vehicula, lectus pulvinar
        malesuada tristique, nunc nibh venenatis mauris, in lobortis velit
        lectus id sapien. Nulla rhoncus rhoncus ante at lobortis. Cras nec
        turpis lobortis, vehicula urna id, sagittis leo. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Aenean pretium, risus id laoreet consectetur, lacus leo sodales ante,
        sed accumsan nibh neque vel magna. Fusce gravida orci a nibh tincidunt,
        eu mollis tellus fermentum. In fermentum lectus tortor, nec tempus nibh
        tincidunt sed. Sed ut ante a augue ultrices convallis. Aliquam id magna
        eros. Integer malesuada turpis et libero molestie, at pretium ante
        consequat. Nulla placerat consectetur velit non finibus. Phasellus
        feugiat consectetur neque a scelerisque. Maecenas ligula magna,
        fringilla elementum odio non, eleifend sodales ipsum. Cras a sem
        lacinia, congue sem non, maximus mi. Nullam tempus dolor id ex venenatis
        semper. Donec a vehicula dui. Maecenas auctor ut odio vel faucibus.
        Nullam efficitur felis sed purus eleifend maximus. Curabitur rhoncus,
        sapien id pharetra suscipit, nibh sem elementum quam, sit amet commodo
        felis mi dapibus felis. Integer justo purus, faucibus sit amet
        sollicitudin id, sodales hendrerit urna. Nullam non augue pellentesque
        nisi pellentesque placerat. Aliquam maximus libero in dapibus
        pellentesque. Aenean blandit id augue non aliquet. Praesent eu neque vel
        erat eleifend imperdiet sit amet nec arcu. Nulla consequat tempus erat
        vulputate interdum. Proin fringilla eros nec lorem eleifend molestie.
        Donec vel nibh at arcu laoreet pulvinar. Nam semper vitae justo
        tristique tincidunt. Proin tincidunt consectetur maximus. Praesent a
        eros sapien. Sed molestie mauris mi. Sed sodales mi sit amet arcu
        pellentesque tincidunt. Aliquam vitae mollis diam. In tristique purus
        vel orci sodales vulputate. Duis ultrices lorem euismod scelerisque
        sodales. Morbi sed eleifend ligula. Aenean sit amet ante placerat,
        bibendum nunc nec, consequat nisi. Sed vitae sapien at velit lacinia
        imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Donec nec metus dolor. Praesent a placerat lectus. Vestibulum maximus ex
        eget diam dignissim blandit. Mauris tempor nisi ac mi iaculis, eu
        ultrices massa sagittis. Donec posuere eget est eu dapibus.
      </ExpandableText>
      <hr />
      <h1>Form</h1>
      <Form />
    </div>
  );
}

export default App;
