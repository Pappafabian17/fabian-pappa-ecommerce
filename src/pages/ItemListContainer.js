import { useEffect, useState } from "react";
import getProducts from "../utils/getProducts";
import ItemList from "../components/itemList/ItemList";

export default function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
console.log(productos)
  useEffect(() => {
    getProducts()
      .then((response) => {
        setProductos(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="ItemListContainer">
      <h1>Item List Container</h1>
      <p>{greeting}</p>
      <ItemList productos={productos} />
    </div>
  );
}
