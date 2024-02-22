import { Link } from "react-router-dom";
import "./itemCard.css";
export default function ItemCard({ id, name, img, price, description, stock }) {
  return (
    <article className="itemCard" id={id}>
      <header>
        <h2>{name}</h2>
      </header>
      <picture className="imagenContainer">
        <img className="imagenProducto" src={img} alt={name} />
        <div>{description}</div>
      </picture>
      <section>
        <p>Precio:{price}</p>
        <p>Stock disponible:{stock}</p>
      </section>
      <footer>
        <Link to={`/item/${id}`}>Ver detalle</Link>
      </footer>
    </article>
  );
}
