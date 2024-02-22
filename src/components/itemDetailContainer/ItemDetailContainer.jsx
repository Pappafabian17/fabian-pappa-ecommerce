import React, { useEffect, useState } from "react";
import { getProductById } from "../../utils/getProducts";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductById(itemId)
      .then((response) => setProduct(response))
      .catch((err) => {
        console.error(err);
        setProduct(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId, product]);

  return (
    <div className="mainItemDetailContainer">
      {loading ? <p>Cargando ...</p> : <ItemDetail {...product} />}
    </div>
  );
}

export default ItemDetailContainer;
