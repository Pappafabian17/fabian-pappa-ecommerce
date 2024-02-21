import { useEffect, useState } from "react";
import { getProductById, getProducts } from "../utils/getProducts";
import ItemList from "../components/itemList/ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductById : getProducts;

    asyncFunc(categoryId)
      .then((res) => setProductos(res))
      .catch((err) => {
        console.error(err);
      });
  }, [categoryId]);

  console.log(productos);
  /* useEffect(() => {
    getProducts()
      .then((response) => {
        setProductos(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []); */
  return (
    <div className="ItemListContainer">
      <h1>Item List Container</h1>
      <p>{greeting}</p>
      <ItemList productos={productos} />
    </div>
  );
}
