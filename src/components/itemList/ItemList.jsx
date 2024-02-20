import ItemCard from "../itemCard/itemCard";

export default function ItemList({ productos }) {
  console.log("prod de itemlist",productos)
  return (
    <div className="itemList">
      {productos.map((producto) => {
        return <ItemCard key={producto.id} {...producto} />;
      })}
    </div>
  );
}
