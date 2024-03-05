import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
// crear componente cartItem,
import { Link } from "react-router-dom";
import CartItem from "../cartItem/CartItem";



export default function Cart() {
  const {cart, clearCart,  totalArticulos, precioTotal} = useContext(CartContext)

  if(totalArticulos === 0 ){
    return(
      <div>
        <h2>No hay articulos en el carrito </h2>
        <Link to="/">Productos</Link>

      </div>
    )
  }



  return <div>
    {cart.map(producto => <CartItem key={producto.id} {...producto}/>) }
    <h3>Total : ${precioTotal}</h3>
    <button onClick={()=>clearCart()}>Limpiar Carrito</button>
    <Link to="/checkout">Checkout </Link>
  </div>;
}
