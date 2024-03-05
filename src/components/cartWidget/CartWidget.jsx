
import "./cartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const {totalArticulos} = useContext(CartContext);

  return (

    <Link to="/cart" className="CartWidgetContainer"> 
      <img src="/images/carrito.svg" alt="carrito de compras" />
      {totalArticulos > 0 ? 
      <p>{totalArticulos}</p> : 
      <p>0</p>
      }
    </Link>
    );
}
