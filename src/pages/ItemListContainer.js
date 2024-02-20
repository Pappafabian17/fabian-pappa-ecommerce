import ItemCounter from "../components/counter/ItemCounter";
import getProducts from "../utils/getProducts";

export default function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProductos(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="ItemListContainer">
      <h1>Item List Container</h1>
      <p>{greeting}</p>
    </div>
  );
}
