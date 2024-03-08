import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
// crear componente cartItem,
import { Link } from "react-router-dom";
import CartItem from "../cartItem/CartItem";
import "./cart.css";

export default function Cart() {
  const { cart, clearCart, totalArticulos, precioTotal } =
    useContext(CartContext);

  if (totalArticulos === 0) {
    return (
      <div className="cartContainerNoContent">
        <h2>No hay articulos en el carrito </h2>
        <Link className="goToProductButton" to="/">
          Productos
        </Link>
      </div>
    );
  }

  return (
    <div className="cartContainer">
      {cart.map((producto) => (
        <CartItem key={producto.id} {...producto} />
      ))}
      <h3 className="totalPrice">Total : ${precioTotal}</h3>
      <Link className="checkoutButton" to="/checkout">
        Proceder al Checkout{" "}
      </Link>
      <button className="cleanCartButton" onClick={() => clearCart()}>
        Limpiar Carrito
      </button>
    </div>
  );
}
