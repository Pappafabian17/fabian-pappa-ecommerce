import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./pages/ItemListContainer";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ItemListContainer greeting={"hola"} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
