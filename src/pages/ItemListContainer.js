import { useEffect, useState } from "react";
import ItemList from "../components/itemList/ItemList";
import { useParams } from "react-router-dom";
import "../index.css";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";

export default function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const collectionRef = categoryId
      ? query(collection(db, "Items"), where("category", "==", categoryId))
      : collection(db, "Items");

    getDocs(collectionRef)
      .then((res) => {
        const productsAdapted = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="ItemListContainer">
      <p>{greeting}</p>
      {loading ? "cargando " : <ItemList productos={productos} />}
    </div>
  );
}
