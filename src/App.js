import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./pages/ItemListContainer";
import Layout from "./pages/Layout";
import Sas from "./pages/Sas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ItemListContainer />} />
          <Route path="/sas" element={<Sas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
