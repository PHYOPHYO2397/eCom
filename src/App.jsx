import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/product/Products";
import Cart from "./pages/cart/Cart.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
