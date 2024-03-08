import React, { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Spinner from "../generics/Spinner";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "Items", itemId);

    getDoc(docRef)
      .then((res) => {
        const data = res.data();
        const productAdapted = { id: res.id, ...data };
        setProduct(productAdapted);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div className="mainItemDetailContainer">
      {loading ? <Spinner /> : <ItemDetail {...product} />}
    </div>
  );
}

export default ItemDetailContainer;
