import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";
import ProductDetailPage from "./pages/ProductDetailPage";
import BreadCrumb from "./components/BreadCrumb";

function App() {
  return (
    <div>
      <NavBar />
      <BreadCrumb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/productDetailPage/:productId"
          element={<ProductDetailPage />}
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
