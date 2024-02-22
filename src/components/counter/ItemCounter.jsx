import { useState } from "react";

export default function ItemCounter({ stock, initial, onAdd }) {
  const [cantidad, setCantidad] = useState(initial);

  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };
  return (
    <div className="counter">
      <div className="controls">
        <button className="counterButton" onClick={restar}>
          -
        </button>
        <h4 className="number">{cantidad}</h4>
        <button className="counterButton" onClick={sumar}>
          +
        </button>
      </div>
      <div>
        <button
          className="counterButton"
          onClick={() => onAdd(cantidad)}
          disabled={!stock}
        >
          {" "}
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
