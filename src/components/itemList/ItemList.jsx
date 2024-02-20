export default function ItemList({ productos }) {
  return (
    <div className="itemList">
      {productos.map((producto) => {
        <ItemCard key={producto.id} {...producto} />;
      })}
    </div>
  );
}
