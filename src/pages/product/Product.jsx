import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { FaHeart } from "react-icons/fa";

const Product = ({ item }) => {
  const { id, productName, productImage, price } = item;
  const { cartItems, addToCart } = useContext(CartContext);
  const cartItem = cartItems.find((item) => item.id === id);
  const { favItems, addToFav, removeFromFav } = useContext(CartContext);
  const favItem = favItems.find((item) => item.id === id);
  const [isNotFav, setIsNotFav] = useState(false);
  function toggleNotFav() {
    setIsNotFav(!isNotFav);
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={productImage} className="card-img-top" alt={productName} />
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">${price}</p>
        <button
          onClick={() => addToCart(item.id)}
          className="btn btn-primary position-relative"
        >
          Add To Cart
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartItem?.count}
          </span>
        </button>
        <button
          onClick={() => {
            if (isNotFav) {
              removeFromFav(item.id);
            } else {
              addToFav(item.id);
            }
            toggleNotFav();
          }}
          className="btn btn-primary position-relative "
        >
          <FaHeart />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {favItem?.count}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Product;
