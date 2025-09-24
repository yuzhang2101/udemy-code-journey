import { useState } from "react";

export function PackingList({ items, onDeleteItems, onPackItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items.toSorted((a, b) =>
      a.description.localeCompare(b.description)
    );
  if (sortBy === "packed")
    sortedItems = items.toSorted((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={() => onPackItem(item.id)}
            />
            <span>
              {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItems(item.id)}>❌</button>
          </li>
        ))}
      </ul>
      <div className="actions">
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
