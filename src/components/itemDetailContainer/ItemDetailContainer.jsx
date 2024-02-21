import React, { useEffect, useState } from "react";
import { getProductById } from "../../utils/getProducts";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();
  useEffect(() => {
    getProductById(itemId)
      .then((response) => setProduct(response))
      .catch((err) => {
        console.error(err);
      });
  }, [itemId]);

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
}

export default ItemDetailContainer;
