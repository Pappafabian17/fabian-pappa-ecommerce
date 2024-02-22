import ItemCard from "../itemCard/itemCard";
import "./itemList.css";
export default function ItemList({ productos }) {
  return (
    <div className="itemList">
      {productos.map((producto) => {
        return <ItemCard key={producto.id} {...producto} />;
      })}
    </div>
  );
}
