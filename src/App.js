import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./pages/ItemListContainer";
import Layout from "./pages/Layout";

import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />

            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          </Route>
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
