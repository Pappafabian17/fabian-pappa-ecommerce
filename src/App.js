import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={"Hola Bienvenido a tu carrito!"} />
    </div>
  );
}

export default App;
