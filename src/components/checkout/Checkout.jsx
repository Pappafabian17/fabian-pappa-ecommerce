import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/firebase/firebaseConfig";
import {
  Timestamp,
  addDoc,
  collection,
  documentId,
  getDocs,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import CheckoutForm from "../checkoutForm/CheckoutForm";

import "./checkout.css";

export default function Checkout() {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, totalArticulos, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objectOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: totalArticulos ? totalArticulos : 0,
        date: Timestamp.fromDate(new Date()),
      };
      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsRef = collection(db, "Items");

      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFromFirestore;
      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productsAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productsAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "Orders");
        const orderAdded = await addDoc(orderRef, objectOrder);

        setOrderId(orderAdded.id);
        clearCart();
      } else {
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Su orden esta siendo generada</h1>;
  }

  if (orderId) {
    return <h1> El id de su orden es: {orderId}</h1>;
  }

  return (
    <div className="checkoutContainer">
      <h1>checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
}
