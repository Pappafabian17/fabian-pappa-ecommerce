import "./cartWidget.css";
export default function CartWidget({ cantidad }) {
  return (
    <div className="CartWidgetContainer">
      <img src="/images/carrito.svg" alt="carrito de compras" />
      <p>{cantidad}</p>
    </div>
  );
}
