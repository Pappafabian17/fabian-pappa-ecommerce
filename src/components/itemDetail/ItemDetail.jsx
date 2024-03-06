import React, { useState } from "react";
import ItemCounter from "../counter/ItemCounter";
import "./itemDetail.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
function ItemDetail({ name, id, image, category, description, price, stock }) {
  const [cantidadAgregada, setCantidadAgregada] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (cantidad) => {
    setCantidadAgregada(cantidad);

    const item = {
      id,
      name,
      price,
    };
    addItem(item, cantidad);
  };
  return (
    <article className="CardItem">
      <header className="Header">
        <h2>{name}</h2>
      </header>
      <picture>
        <img className="imagenDetail" src={image} alt={name} />
      </picture>
      <section>
        <p className="Info">
          Categoria: <span className="spanDetail">{category}</span>
        </p>
        <p className="Info">
          Descripción: <span className="spanDetail">{description}</span>
        </p>
        <p className="Info">
          Precio: <span className="spanDetail">${price}</span>
        </p>
      </section>
      <footer className="ItemFooter">
        {cantidadAgregada > 0 ? (
          <Link to="/cart" className="counterButton">
            Terminar compra
          </Link>
        ) : (
          <ItemCounter initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  );
}

export default ItemDetail;
