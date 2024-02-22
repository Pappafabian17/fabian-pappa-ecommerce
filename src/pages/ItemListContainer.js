import { useEffect, useState } from "react";
import { getProductsByCategory, getProducts } from "../utils/getProducts";
import ItemList from "../components/itemList/ItemList";
import { useParams } from "react-router-dom";
import "../index.css";

export default function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then((res) => setProductos(res))
      .catch((err) => {
        console.error(err);
      });
  }, [categoryId]);

  return (
    <div className="ItemListContainer">
      <p>{greeting}</p>
      <ItemList productos={productos} />
    </div>
  );
}
