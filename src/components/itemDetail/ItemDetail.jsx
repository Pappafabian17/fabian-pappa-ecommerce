import React from "react";
import ItemCounter from "../counter/ItemCounter";

function ItemDetail({ name, img, category, description, price, stock, onAdd }) {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Categoria: {category}</p>
        <p className="Info">Descripción: {description}</p>
        <p className="Info">Precio: ${price}</p>
      </section>
      <footer className="ItemFooter">
        <ItemCounter
          initial={1}
          stock={stock}
          onAdd={(quantity) => onAdd(quantity)}
        />
      </footer>
    </article>
  );
}

export default ItemDetail;
