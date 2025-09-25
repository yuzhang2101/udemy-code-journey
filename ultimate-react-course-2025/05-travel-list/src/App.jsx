import { useState } from "react";
import { Logo } from "./components/Logo";
import { Form } from "./components/Form";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);

  const handleAdd = (item) => {
    setItems((items) => [...items, item]);
  };
  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const handlePackItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const handleClearList = () => {
    setItems([]);
  };
  return (
    <>
      <Logo />
      <Form onAddItems={handleAdd} />
      <PackingList
        items={items}
        onDeleteItems={handleDelete}
        onPackItem={handlePackItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </>
  );
}

export default App;
