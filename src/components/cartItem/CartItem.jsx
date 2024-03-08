import { useContext } from "react";
import "./cartItem.css";
import { CartContext } from "../../context/CartContext";
export default function CartItem({ name, price, quantity, id }) {
  const { removeItem } = useContext(CartContext);

  const subTotal = quantity * price;
  return (
    <div className="itemCartContainer">
      <p className="itemCartName">{name}</p>
      <p>cantidad: {quantity}</p>
      <p>precio unitario: ${price}</p>
      <p>subTotal : ${subTotal}</p>
      <button className="cleanCartButton" onClick={() => removeItem(id)}>
        Eliminar
      </button>
    </div>
  );
}
