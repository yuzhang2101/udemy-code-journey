export function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage =
    numItems > 0 ? Math.round((numPacked / numItems) * 100) : 0;
  return (
    <div className="stats">
      <em>
        You have {items.length} items on your list, and you already packed{" "}
        {numPacked} ({percentage}%)
      </em>
    </div>
  );
}
