import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/product/Products";
import Cart from "./pages/cart/Cart.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";
import React, { useState, useEffect } from "react";
import Favourite from "./pages/favourite/Favourite.jsx";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
    const element = document.body;
    element.dataset.bsTheme = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <div className="App">
      <CartContextProvider>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="themeSwitch"
            checked={isDarkMode}
            onChange={toggleTheme}
            aria-label="Switch theme"
          />
          <label className="form-check-label" htmlFor="themeSwitch">
            Dark mode
          </label>
        </div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favourite" element={<Favourite />} />
          </Routes>
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
