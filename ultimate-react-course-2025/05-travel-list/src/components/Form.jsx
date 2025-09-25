import { useState } from "react";

export function Form({ onAddItems }) {
  // const
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    if (!description) return;
    onAddItems({
      description,
      quantity,
      id: crypto.randomUUID(),
      packed: false,
    });
    setDescription("");
    setQuantity(1);
  };

  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select onChange={(e) => setQuantity(e.target.value)} value={quantity}>
        {Array.from({ length: 20 }, (_, i) => (
          <option value={i + 1}>{i + 1}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
